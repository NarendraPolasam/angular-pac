export default {
    input: 'dist/index.js',
    sourceMap: false,
    output:{
      format: 'umd',
      name: 'iaeanarenmodule',
      file: 'dist/bundles/iaeanarenmodule.umd.js',
      globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
      }
    }
  }