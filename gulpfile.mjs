import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
import browserSync from "browser-sync";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import gulpGhPages from "gulp-gh-pages";

const sassProcessor = gulpSass(sass);

gulp.task("clean", async function () {
    const del = await import("del");
    await del.deleteAsync(["dist"]);
});

gulp.task("scss", function () {
    return gulp
        .src("app/scss/**/*.scss")
        .pipe(sassProcessor({ outputStyle: "compressed" }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 8 versions"],
            })
        )
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css", function () {
    return gulp
        .src([
            "node_modules/normalize.css/normalize.css",
            "node_modules/slick-carousel/slick/slick.css",
            "node_modules/animate.css/animate.css",
        ])
        .pipe(concat("_libs.scss"))
        .pipe(gulp.dest("app/scss"))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task("html", function () {
    return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function () {
    return gulp.src("app/js/*.js").pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", function () {
    return gulp
        .src(["node_modules/slick-carousel/slick/slick.js"])
        .pipe(concat("libs.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("app/js"))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
    browserSync.init({
        server: {
            baseDir: "app/",
        },
    });
});

gulp.task("export", function () {
    const tasks = [
        gulp.src("app/**/*.html").pipe(gulp.dest("dist")),
        gulp.src("app/css/**/*.css").pipe(gulp.dest("dist/css")),
        gulp.src("app/js/**/*.js").pipe(gulp.dest("dist/js")),
        gulp.src("app/fonts/**/*.*").pipe(gulp.dest("dist/fonts")),
        gulp.src("app/images/**/*.*").pipe(gulp.dest("dist/images")),
    ];
    return Promise.all(
        tasks.map(
            (stream) =>
                new Promise((resolve, reject) => {
                    stream.on("end", resolve);
                    stream.on("error", reject);
                })
        )
    );
});

gulp.task("watch", function () {
    gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
    gulp.watch("app/*.html", gulp.parallel("html"));
    gulp.watch("app/js/*.js", gulp.parallel("script"));
});

gulp.task("deploy", function () {
    return gulp.src("./dist/**/*").pipe(gulpGhPages());
});

gulp.task("build", gulp.series("clean", "export", "deploy"));

gulp.task("default", gulp.parallel("css", "scss", "js", "browser-sync", "watch"));
