<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isgzipBuffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [gzip][gzip-rfc-1952] buffer.



<section class="usage">

## Usage

```javascript
import isgzipBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-gzip-buffer@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/assert-is-gzip-buffer/tags). For example,

```javascript
import isgzipBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-gzip-buffer@v0.2.1-deno/mod.js';
```

#### isgzipBuffer( value )

Tests if a value is a [`gzip`][gzip-rfc-1952] buffer.

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var buf = new Uint8Array( 20 );
buf[ 0 ] = 31;  // 0x1f => magic number
buf[ 1 ] = 139; // 0x8b
buf[ 2 ] = 8;   // 0x08 => compression method

var bool = isgzipBuffer( buf );
// returns true

bool = isgzipBuffer( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A [gzip][gzip-rfc-1952] buffer is defined as either a Node.js [`Buffer`][@stdlib/buffer/ctor] or [`Uint8Array`][@stdlib/array/uint8] which contains a 10-byte header, a body containing the compressed payload, and an 8-byte footer containing a CRC-32 checksum and the length of the original uncompressed data, modulo `2^32`.
-   This function only examines the 10-byte header to ensure the header includes the expected magic number and compression method. The function does not perform an integrity check.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@deno/mod.js';
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@deno/mod.js';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import Uint8ClampedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@deno/mod.js';
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@deno/mod.js';
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@deno/mod.js';
import isgzipBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-gzip-buffer@deno/mod.js';

var buf = new Uint8Array( 20 );
buf[ 0 ] = 31;  // 0x1f => magic number
buf[ 1 ] = 139; // 0x8b
buf[ 2 ] = 8;   // 0x08 => compression method

var bool = isgzipBuffer( buf );
// returns true

bool = isgzipBuffer( new Float32Array( 20 ) );
// returns false

bool = isgzipBuffer( new Int8Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint8Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint8ClampedArray( 20 ) );
// returns false

bool = isgzipBuffer( new Int16Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint16Array( 20 ) );
// returns false

bool = isgzipBuffer( new Int32Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint32Array( 20 ) );
// returns false

bool = isgzipBuffer( new Float64Array( 20 ) );
// returns false

bool = isgzipBuffer( new Array( 20 ) );
// returns false

bool = isgzipBuffer( {} );
// returns false

bool = isgzipBuffer( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-buffer`][@stdlib/assert/is-buffer]</span><span class="delimiter">: </span><span class="description">test if a value is a Buffer object.</span>
-   <span class="package-name">[`@stdlib/assert-is-uint8array`][@stdlib/assert/is-uint8array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint8Array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-gzip-buffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-gzip-buffer

[test-image]: https://github.com/stdlib-js/assert-is-gzip-buffer/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/assert-is-gzip-buffer/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-gzip-buffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-gzip-buffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-gzip-buffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-gzip-buffer/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-gzip-buffer/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-gzip-buffer/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-gzip-buffer/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-gzip-buffer/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-gzip-buffer/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-gzip-buffer/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-gzip-buffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-gzip-buffer/main/LICENSE

[gzip-rfc-1952]: https://tools.ietf.org/html/rfc1952

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor/tree/deno

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/deno

<!-- <related-links> -->

[@stdlib/assert/is-buffer]: https://github.com/stdlib-js/assert-is-buffer/tree/deno

[@stdlib/assert/is-uint8array]: https://github.com/stdlib-js/assert-is-uint8array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
