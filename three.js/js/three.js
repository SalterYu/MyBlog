(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = global || self, factory(global.THREE = {}));
}(this, (function (exports) { 'use strict';

  // Polyfills

  if ( Number.EPSILON === undefined ) {

    Number.EPSILON = Math.pow( 2, - 52 );

  }

  if ( Number.isInteger === undefined ) {

    // Missing in IE
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

    Number.isInteger = function ( value ) {

      return typeof value === 'number' && isFinite( value ) && Math.floor( value ) === value;

    };

  }

  //

  if ( Math.sign === undefined ) {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

    Math.sign = function ( x ) {

      return ( x < 0 ) ? - 1 : ( x > 0 ) ? 1 : + x;

    };

  }

  if ( 'name' in Function.prototype === false ) {

    // Missing in IE
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

    Object.defineProperty( Function.prototype, 'name', {

      get: function () {

        return this.toString().match( /^\s*function\s*([^\(\s]*)/ )[ 1 ];

      }

    } );

  }

  if ( Object.assign === undefined ) {

    // Missing in IE
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

    Object.assign = function ( target ) {

      if ( target === undefined || target === null ) {

        throw new TypeError( 'Cannot convert undefined or null to object' );

      }

      var output = Object( target );

      for ( var index = 1; index < arguments.length; index ++ ) {

        var source = arguments[ index ];

        if ( source !== undefined && source !== null ) {

          for ( var nextKey in source ) {

            if ( Object.prototype.hasOwnProperty.call( source, nextKey ) ) {

              output[ nextKey ] = source[ nextKey ];

            }

          }

        }

      }

      return output;

    };

  }

  var REVISION = '115';
  var MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
  var TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
  var CullFaceNone = 0;
  var CullFaceBack = 1;
  var CullFaceFront = 2;
  var CullFaceFrontBack = 3;
  var FrontFaceDirectionCW = 0;
  var FrontFaceDirectionCCW = 1;
  var BasicShadowMap = 0;
  var PCFShadowMap = 1;
  var PCFSoftShadowMap = 2;
  var VSMShadowMap = 3;
  var FrontSide = 0;
  var BackSide = 1;
  var DoubleSide = 2;
  var FlatShading = 1;
  var SmoothShading = 2;
  var NoBlending = 0;
  var NormalBlending = 1;
  var AdditiveBlending = 2;
  var SubtractiveBlending = 3;
  var MultiplyBlending = 4;
  var CustomBlending = 5;
  var AddEquation = 100;
  var SubtractEquation = 101;
  var ReverseSubtractEquation = 102;
  var MinEquation = 103;
  var MaxEquation = 104;
  var ZeroFactor = 200;
  var OneFactor = 201;
  var SrcColorFactor = 202;
  var OneMinusSrcColorFactor = 203;
  var SrcAlphaFactor = 204;
  var OneMinusSrcAlphaFactor = 205;
  var DstAlphaFactor = 206;
  var OneMinusDstAlphaFactor = 207;
  var DstColorFactor = 208;
  var OneMinusDstColorFactor = 209;
  var SrcAlphaSaturateFactor = 210;
  var NeverDepth = 0;
  var AlwaysDepth = 1;
  var LessDepth = 2;
  var LessEqualDepth = 3;
  var EqualDepth = 4;
  var GreaterEqualDepth = 5;
  var GreaterDepth = 6;
  var NotEqualDepth = 7;
  var MultiplyOperation = 0;
  var MixOperation = 1;
  var AddOperation = 2;
  var NoToneMapping = 0;
  var LinearToneMapping = 1;
  var ReinhardToneMapping = 2;
  var Uncharted2ToneMapping = 3;
  var CineonToneMapping = 4;
  var ACESFilmicToneMapping = 5;

  var UVMapping = 300;
  var CubeReflectionMapping = 301;
  var CubeRefractionMapping = 302;
  var EquirectangularReflectionMapping = 303;
  var EquirectangularRefractionMapping = 304;
  var SphericalReflectionMapping = 305;
  var CubeUVReflectionMapping = 306;
  var CubeUVRefractionMapping = 307;
  var RepeatWrapping = 1000;
  var ClampToEdgeWrapping = 1001;
  var MirroredRepeatWrapping = 1002;
  var NearestFilter = 1003;
  var NearestMipmapNearestFilter = 1004;
  var NearestMipMapNearestFilter = 1004;
  var NearestMipmapLinearFilter = 1005;
  var NearestMipMapLinearFilter = 1005;
  var LinearFilter = 1006;
  var LinearMipmapNearestFilter = 1007;
  var LinearMipMapNearestFilter = 1007;
  var LinearMipmapLinearFilter = 1008;
  var LinearMipMapLinearFilter = 1008;
  var UnsignedByteType = 1009;
  var ByteType = 1010;
  var ShortType = 1011;
  var UnsignedShortType = 1012;
  var IntType = 1013;
  var UnsignedIntType = 1014;
  var FloatType = 1015;
  var HalfFloatType = 1016;
  var UnsignedShort4444Type = 1017;
  var UnsignedShort5551Type = 1018;
  var UnsignedShort565Type = 1019;
  var UnsignedInt248Type = 1020;
  var AlphaFormat = 1021;
  var RGBFormat = 1022;
  var RGBAFormat = 1023;
  var LuminanceFormat = 1024;
  var LuminanceAlphaFormat = 1025;
  var RGBEFormat = RGBAFormat;
  var DepthFormat = 1026;
  var DepthStencilFormat = 1027;
  var RedFormat = 1028;
  var RedIntegerFormat = 1029;
  var RGFormat = 1030;
  var RGIntegerFormat = 1031;
  var RGBIntegerFormat = 1032;
  var RGBAIntegerFormat = 1033;

  var RGB_S3TC_DXT1_Format = 33776;
  var RGBA_S3TC_DXT1_Format = 33777;
  var RGBA_S3TC_DXT3_Format = 33778;
  var RGBA_S3TC_DXT5_Format = 33779;
  var RGB_PVRTC_4BPPV1_Format = 35840;
  var RGB_PVRTC_2BPPV1_Format = 35841;
  var RGBA_PVRTC_4BPPV1_Format = 35842;
  var RGBA_PVRTC_2BPPV1_Format = 35843;
  var RGB_ETC1_Format = 36196;
  var RGB_ETC2_Format = 37492;
  var RGBA_ETC2_EAC_Format = 37496;
  var RGBA_ASTC_4x4_Format = 37808;
  var RGBA_ASTC_5x4_Format = 37809;
  var RGBA_ASTC_5x5_Format = 37810;
  var RGBA_ASTC_6x5_Format = 37811;
  var RGBA_ASTC_6x6_Format = 37812;
  var RGBA_ASTC_8x5_Format = 37813;
  var RGBA_ASTC_8x6_Format = 37814;
  var RGBA_ASTC_8x8_Format = 37815;
  var RGBA_ASTC_10x5_Format = 37816;
  var RGBA_ASTC_10x6_Format = 37817;
  var RGBA_ASTC_10x8_Format = 37818;
  var RGBA_ASTC_10x10_Format = 37819;
  var RGBA_ASTC_12x10_Format = 37820;
  var RGBA_ASTC_12x12_Format = 37821;
  var RGBA_BPTC_Format = 36492;
  var SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
  var SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
  var SRGB8_ALPHA8_ASTC_5x5_Format = 37842;
  var SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
  var SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
  var SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
  var SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
  var SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
  var SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
  var SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
  var SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
  var SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
  var SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
  var SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
  var LoopOnce = 2200;
  var LoopRepeat = 2201;
  var LoopPingPong = 2202;
  var InterpolateDiscrete = 2300;
  var InterpolateLinear = 2301;
  var InterpolateSmooth = 2302;
  var ZeroCurvatureEnding = 2400;
  var ZeroSlopeEnding = 2401;
  var WrapAroundEnding = 2402;
  var TrianglesDrawMode = 0;
  var TriangleStripDrawMode = 1;
  var TriangleFanDrawMode = 2;
  var LinearEncoding = 3000;
  var sRGBEncoding = 3001;
  var GammaEncoding = 3007;
  var RGBEEncoding = 3002;
  var LogLuvEncoding = 3003;
  var RGBM7Encoding = 3004;
  var RGBM16Encoding = 3005;
  var RGBDEncoding = 3006;
  var BasicDepthPacking = 3200;
  var RGBADepthPacking = 3201;
  var TangentSpaceNormalMap = 0;
  var ObjectSpaceNormalMap = 1;

  var ZeroStencilOp = 0;
  var KeepStencilOp = 7680;
  var ReplaceStencilOp = 7681;
  var IncrementStencilOp = 7682;
  var DecrementStencilOp = 7683;
  var IncrementWrapStencilOp = 34055;
  var DecrementWrapStencilOp = 34056;
  var InvertStencilOp = 5386;

  var NeverStencilFunc = 512;
  var LessStencilFunc = 513;
  var EqualStencilFunc = 514;
  var LessEqualStencilFunc = 515;
  var GreaterStencilFunc = 516;
  var NotEqualStencilFunc = 517;
  var GreaterEqualStencilFunc = 518;
  var AlwaysStencilFunc = 519;

  var StaticDrawUsage = 35044;
  var DynamicDrawUsage = 35048;
  var StreamDrawUsage = 35040;
  var StaticReadUsage = 35045;
  var DynamicReadUsage = 35049;
  var StreamReadUsage = 35041;
  var StaticCopyUsage = 35046;
  var DynamicCopyUsage = 35050;
  var StreamCopyUsage = 35042;

  /**
   * https://github.com/mrdoob/eventdispatcher.js/
   */

  function EventDispatcher() {}

  Object.assign( EventDispatcher.prototype, {

    addEventListener: function ( type, listener ) {

      if ( this._listeners === undefined ) { this._listeners = {}; }

      var listeners = this._listeners;

      if ( listeners[ type ] === undefined ) {

        listeners[ type ] = [];

      }

      if ( listeners[ type ].indexOf( listener ) === - 1 ) {

        listeners[ type ].push( listener );

      }

    },

    hasEventListener: function ( type, listener ) {

      if ( this._listeners === undefined ) { return false; }

      var listeners = this._listeners;

      return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

    },

    removeEventListener: function ( type, listener ) {

      if ( this._listeners === undefined ) { return; }

      var listeners = this._listeners;
      var listenerArray = listeners[ type ];

      if ( listenerArray !== undefined ) {

        var index = listenerArray.indexOf( listener );

        if ( index !== - 1 ) {

          listenerArray.splice( index, 1 );

        }

      }

    },

    dispatchEvent: function ( event ) {

      if ( this._listeners === undefined ) { return; }

      var listeners = this._listeners;
      var listenerArray = listeners[ event.type ];

      if ( listenerArray !== undefined ) {

        event.target = this;

        // Make a copy, in case listeners are removed while iterating.
        var array = listenerArray.slice( 0 );

        for ( var i = 0, l = array.length; i < l; i ++ ) {

          array[ i ].call( this, event );

        }

      }

    }

  } );

  /**
   * @author alteredq / http://alteredqualia.com/
   * @author mrdoob / http://mrdoob.com/
   * @author WestLangley / http://github.com/WestLangley
   * @author thezwap
   */

  var _lut = [];

  for ( var i = 0; i < 256; i ++ ) {

    _lut[ i ] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 );

  }

  var MathUtils = {

    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,

    generateUUID: function () {

      // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

      var d0 = Math.random() * 0xffffffff | 0;
      var d1 = Math.random() * 0xffffffff | 0;
      var d2 = Math.random() * 0xffffffff | 0;
      var d3 = Math.random() * 0xffffffff | 0;
      var uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
        _lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
        _lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
        _lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

      // .toUpperCase() here flattens concatenated strings to save heap memory space.
      return uuid.toUpperCase();

    },

    clamp: function ( value, min, max ) {

      return Math.max( min, Math.min( max, value ) );

    },

    // compute euclidian modulo of m % n
    // https://en.wikipedia.org/wiki/Modulo_operation

    euclideanModulo: function ( n, m ) {

      return ( ( n % m ) + m ) % m;

    },

    // Linear mapping from range <a1, a2> to range <b1, b2>

    mapLinear: function ( x, a1, a2, b1, b2 ) {

      return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

    },

    // https://en.wikipedia.org/wiki/Linear_interpolation

    lerp: function ( x, y, t ) {

      return ( 1 - t ) * x + t * y;

    },

    // http://en.wikipedia.org/wiki/Smoothstep

    smoothstep: function ( x, min, max ) {

      if ( x <= min ) { return 0; }
      if ( x >= max ) { return 1; }

      x = ( x - min ) / ( max - min );

      return x * x * ( 3 - 2 * x );

    },

    smootherstep: function ( x, min, max ) {

      if ( x <= min ) { return 0; }
      if ( x >= max ) { return 1; }

      x = ( x - min ) / ( max - min );

      return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

    },

    // Random integer from <low, high> interval

    randInt: function ( low, high ) {

      return low + Math.floor( Math.random() * ( high - low + 1 ) );

    },

    // Random float from <low, high> interval

    randFloat: function ( low, high ) {

      return low + Math.random() * ( high - low );

    },

    // Random float from <-range/2, range/2> interval

    randFloatSpread: function ( range ) {

      return range * ( 0.5 - Math.random() );

    },

    degToRad: function ( degrees ) {

      return degrees * MathUtils.DEG2RAD;

    },

    radToDeg: function ( radians ) {

      return radians * MathUtils.RAD2DEG;

    },

    isPowerOfTwo: function ( value ) {

      return ( value & ( value - 1 ) ) === 0 && value !== 0;

    },

    ceilPowerOfTwo: function ( value ) {

      return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

    },

    floorPowerOfTwo: function ( value ) {

      return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

    },

    setQuaternionFromProperEuler: function ( q, a, b, c, order ) {

      // Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

      // rotations are applied to the axes in the order specified by 'order'
      // rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
      // angles are in radians

      var cos = Math.cos;
      var sin = Math.sin;

      var c2 = cos( b / 2 );
      var s2 = sin( b / 2 );

      var c13 = cos( ( a + c ) / 2 );
      var s13 = sin( ( a + c ) / 2 );

      var c1_3 = cos( ( a - c ) / 2 );
      var s1_3 = sin( ( a - c ) / 2 );

      var c3_1 = cos( ( c - a ) / 2 );
      var s3_1 = sin( ( c - a ) / 2 );

      if ( order === 'XYX' ) {

        q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );

      } else if ( order === 'YZY' ) {

        q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );

      } else if ( order === 'ZXZ' ) {

        q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );

      } else if ( order === 'XZX' ) {

        q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );

      } else if ( order === 'YXY' ) {

        q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );

      } else if ( order === 'ZYZ' ) {

        q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );

      } else {

        console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.' );

      }

    }

  };

  /**
   * @author mrdoob / http://mrdoob.com/
   * @author philogb / http://blog.thejit.org/
   * @author egraether / http://egraether.com/
   * @author zz85 / http://www.lab4games.net/zz85/blog
   */

  function Vector2( x, y ) {

    this.x = x || 0;
    this.y = y || 0;

  }

  Object.defineProperties( Vector2.prototype, {

    "width": {

      get: function () {

        return this.x;

      },

      set: function ( value ) {

        this.x = value;

      }

    },

    "height": {

      get: function () {

        return this.y;

      },

      set: function ( value ) {

        this.y = value;

      }

    }

  } );

  Object.assign( Vector2.prototype, {

    isVector2: true,

    set: function ( x, y ) {

      this.x = x;
      this.y = y;

      return this;

    },

    setScalar: function ( scalar ) {

      this.x = scalar;
      this.y = scalar;

      return this;

    },

    setX: function ( x ) {

      this.x = x;

      return this;

    },

    setY: function ( y ) {

      this.y = y;

      return this;

    },

    setComponent: function ( index, value ) {

      switch ( index ) {

        case 0: this.x = value; break;
        case 1: this.y = value; break;
        default: throw new Error( 'index is out of range: ' + index );

      }

      return this;

    },

    getComponent: function ( index ) {

      switch ( index ) {

        case 0: return this.x;
        case 1: return this.y;
        default: throw new Error( 'index is out of range: ' + index );

      }

    },

    clone: function () {

      return new this.constructor( this.x, this.y );

    },

    copy: function ( v ) {

      this.x = v.x;
      this.y = v.y;

      return this;

    },

    add: function ( v, w ) {

      if ( w !== undefined ) {

        console.warn( 'THREE.Vector2: .
