var gulp = require('gulp'),
  ParticlesAssetManager = require('particles-assetmanager');


var particlesAssetManager = new ParticlesAssetManager();
particlesAssetManager.addDefaultTasks(gulp);

gulp.task('default', ["build"]);
