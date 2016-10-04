export function encode(_data_) {
  let data = escape(_data_),
      b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      enc = '',
      i = 0,
      o1, o2, o3, h1, h2, h3, h4, bits;

  // pack three octets into four hexets
  do {
    o1 = data.charCodeAt(i++); // eslint-disable-line no-plusplus
    o2 = data.charCodeAt(i++); // eslint-disable-line no-plusplus
    o3 = data.charCodeAt(i++); // eslint-disable-line no-plusplus

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  switch (data.length % 3) {
    case 1:
      enc = enc.slice(0, -2) + '==';
      break;
    case 2:
      enc = enc.slice(0, -1) + '=';
      break;
    default:
      break;
  }

  return enc;
}


export function decode(data) {
  let b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      enc = '',
      i = 0,
      o1, o2, o3, h1, h2, h3, h4, bits;

  do {
    h1 = b64.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus
    h2 = b64.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus
    h3 = b64.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus
    h4 = b64.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 === 64) {
      enc += String.fromCharCode(o1);
    } else if (h4 === 64) {
      enc += String.fromCharCode(o1, o2);
    } else {
      enc += String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  return unescape(enc);
}
