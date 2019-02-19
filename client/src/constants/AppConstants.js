import {isEqual, transform, isObject} from 'lodash';
import winston from 'winston';

// const DBG = null;
export const DBG = true;

const logger = winston.createLogger({
  level: DBG ? 'verbose' : 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
});

export const Log = logger;

export const axiosDBG = (obj) => {
  Log.verbose(`Server Response: ${obj}`);
  obj.ok = (obj.status === 200);
  return obj;
};

export function debugDiff(object, base) {
  function changes(object, base) {
    return transform(object, function(result, value, key) {
      if (!isEqual(value, base[key])) {
        result[key] = (isObject(value) && isObject(base[key])) ? changes(value,
          base[key]) : value;
      }
    });
  }

  return changes(object, base);
}

export const UNIT_OFFSET = 1000;

export const exampleCode = `
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook'
        };
      }
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook'
        };
      }
  `;

// Delimits '|' and '\d)'
// RexEx lookahead used. use only ES2018 supported browsers.
export const LOG_SPLIT = new RegExp('(?<=\\d)\\)|\\|', 'g');
export const LOG_IGNORE = ['--', '=>'];

export const TYPE_CPU = 'cpu';
export const TYPE_MISC = 'show';

export const CLASS_LOG = {
  '368856477293909/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856477293909,
    'sector': 268507944,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856478385207/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856478385207,
    'sector': 336039408,
    'bytes': 40960,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471455250/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471455250,
    'sector': 268435808,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482805240/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482805240,
    'sector': 377487720,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471954165/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471954165,
    'sector': 268435864,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472290915/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472290915,
    'sector': 268435904,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856438555494/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856438555494,
    'sector': 8388616,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856477988543/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856477988543,
    'sector': 336029416,
    'bytes': 73728,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856483072249/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856483072249,
    'sector': 377487760,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481561225/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481561225,
    'sector': 272632760,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481933002/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481933002,
    'sector': 272632816,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472807789/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472807789,
    'sector': 268435960,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482587774/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482587774,
    'sector': 377487680,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482919966/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482919966,
    'sector': 377487736,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856475441508/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856475441508,
    'sector': 336039056,
    'bytes': 16384,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481220906/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481220906,
    'sector': 272632704,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480984653/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480984653,
    'sector': 272632656,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472932581/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472932581,
    'sector': 268435792,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856483267883/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856483267883,
    'sector': 377487712,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471226113/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471226113,
    'sector': 268435776,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472670769/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472670769,
    'sector': 268435944,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856483211835/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856483211835,
    'sector': 377487784,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481791930/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481791930,
    'sector': 272632792,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856470221600/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856470221600,
    'sector': 268507896,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482966494/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482966494,
    'sector': 377487744,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856483025660/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856483025660,
    'sector': 377487752,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481514658/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481514658,
    'sector': 272632752,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480890205/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480890205,
    'sector': 272632640,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856453907085/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856453907085,
    'sector': 71303176,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445440992/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445440992,
    'sector': 8389072,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481885975/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481885975,
    'sector': 272632808,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856476681663/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856476681663,
    'sector': 336040376,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856453937891/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856453937891,
    'sector': 247464192,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445619349/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445619349,
    'sector': 244193528,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 2,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445759638/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445759638,
    'sector': 244193544,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 2,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445603213/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445603213,
    'sector': 244193520,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 2,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471092801/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471092801,
    'sector': 268435760,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481839300/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481839300,
    'sector': 272632800,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482721501/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482721501,
    'sector': 377487696,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482634861/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482634861,
    'sector': 377487688,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481607697/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481607697,
    'sector': 272632768,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472357423/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472357423,
    'sector': 268435912,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856470814321/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856470814321,
    'sector': 268435728,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471360996/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471360996,
    'sector': 268435800,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481315317/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481315317,
    'sector': 272632720,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482344363/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482344363,
    'sector': 377487640,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856470429172/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856470429172,
    'sector': 268506760,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482486018/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482486018,
    'sector': 377487664,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482217741/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482217741,
    'sector': 377487616,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481362428/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481362428,
    'sector': 272632728,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472516750/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472516750,
    'sector': 268435928,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482027376/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482027376,
    'sector': 272632832,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481743972/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481743972,
    'sector': 272632784,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482391346/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482391346,
    'sector': 377487648,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480315191/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480315191,
    'sector': 272696416,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445587009/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445587009,
    'sector': 244193512,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 2,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482755054/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482755054,
    'sector': 377487704,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481032475/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481032475,
    'sector': 272632672,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856453815710/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856453815710,
    'sector': 0,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471522207/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471522207,
    'sector': 268435816,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480621204/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480621204,
    'sector': 272632600,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472155554/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472155554,
    'sector': 268435888,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481172972/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481172972,
    'sector': 272632696,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481079482/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481079482,
    'sector': 272632680,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471588554/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471588554,
    'sector': 268435824,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472583651/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472583651,
    'sector': 268435936,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480785423/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480785423,
    'sector': 272632624,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445541017/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445541017,
    'sector': 244193496,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 2,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480704130/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480704130,
    'sector': 272632608,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856470958056/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856470958056,
    'sector': 268435744,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472424039/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472424039,
    'sector': 268435920,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482265718/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482265718,
    'sector': 377487624,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471678687/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471678687,
    'sector': 268435832,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481979698/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481979698,
    'sector': 272632824,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856453847800/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856453847800,
    'sector': 40,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856474163072/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856474163072,
    'sector': 268713328,
    'bytes': 16384,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481682281/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481682281,
    'sector': 272632776,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445570009/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445570009,
    'sector': 244193504,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 2,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481421371/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481421371,
    'sector': 272632736,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471748966/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471748966,
    'sector': 268435840,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480817439/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480817439,
    'sector': 272632632,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480937443/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480937443,
    'sector': 272632648,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482053790/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482053790,
    'sector': 272632664,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856476305007/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856476305007,
    'sector': 3673016,
    'bytes': 53248,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471159367/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471159367,
    'sector': 268435768,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856445635827/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856445635827,
    'sector': 244193536,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 2,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482437575/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482437575,
    'sector': 377487656,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482873114/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482873114,
    'sector': 377487728,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480752676/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480752676,
    'sector': 272632616,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856493197591/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856493197591,
    'sector': 336028888,
    'bytes': 131072,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480508777/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480508777,
    'sector': 272632584,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856470615849/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856470615849,
    'sector': 268435712,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481468045/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481468045,
    'sector': 272632744,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856477555221/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856477555221,
    'sector': 268802216,
    'bytes': 49152,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472221944/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472221944,
    'sector': 268435896,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480466298/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480466298,
    'sector': 272632576,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481268264/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481268264,
    'sector': 272632712,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856477023957/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856477023957,
    'sector': 336031432,
    'bytes': 69632,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472878397/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472878397,
    'sector': 268435968,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856478764645/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856478764645,
    'sector': 336020920,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856438452823/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856438452823,
    'sector': 8654064,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472020869/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472020869,
    'sector': 268435872,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856453877107/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856453877107,
    'sector': 41943888,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471292563/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471292563,
    'sector': 268435784,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472740409/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472740409,
    'sector': 268435952,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856438524040/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856438524040,
    'sector': 8,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856472088535/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856472088535,
    'sector': 268435880,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856479046854/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856479046854,
    'sector': 336029688,
    'bytes': 20480,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471025910/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471025910,
    'sector': 268435752,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471819207/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471819207,
    'sector': 268435848,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856424781877/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856424781877,
    'sector': 235479448,
    'bytes': 69632,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 1,
    'error': 0,
    'pdu_len': 0,
  },
  '368856483165332/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856483165332,
    'sector': 377487776,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856470739333/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856470739333,
    'sector': 268435720,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482298477/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482298477,
    'sector': 377487632,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856483118900/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856483118900,
    'sector': 377487768,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856470889348/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856470889348,
    'sector': 268435736,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856474924113/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856474924113,
    'sector': 268713360,
    'bytes': 12288,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856483405411/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856483405411,
    'sector': 377750520,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856453780923/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856453780923,
    'sector': 0,
    'bytes': 0,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856482540737/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856482540737,
    'sector': 377487672,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856481126197/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856481126197,
    'sector': 272632688,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856471886695/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856471886695,
    'sector': 268435856,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 3,
    'error': 0,
    'pdu_len': 0,
  },
  '368856475736631/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856475736631,
    'sector': 336039088,
    'bytes': 57344,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
  '368856480546834/submit_bio': {
    'magic': 1700885511,
    'sequence': 0,
    'time': 368856480546834,
    'sector': 272632592,
    'bytes': 4096,
    'action': 4294967295,
    'pid': 0,
    'device': 0,
    'cpu': 0,
    'error': 0,
    'pdu_len': 0,
  },
};
export const TRACE_LOG = `

368856424785684 |   1)               |  submit_bio() {
368856424786497 |   1)               |    generic_make_request() {
368856424786887 |   1)   0.577 us    |      blk_queue_enter();
368856424787803 |   1)               |      generic_make_request_checks() {
368856424788190 |   1)   0.343 us    |        should_fail_bio();
368856424788922 |   1)   0.536 us    |        __disk_get_part();
368856424790067 |   1)   0.506 us    |        ktime_get();
368856424790998 |   1)   2.947 us    |      }
368856424791429 |   1)               |      blk_mq_make_request() {
368856424791847 |   1)   0.345 us    |        blk_queue_bounce();
368856424792504 |   1)   0.620 us    |        blk_queue_split();
368856424793448 |   1)   0.369 us    |        blk_attempt_plug_merge();
368856424794089 |   1)               |        __blk_mq_sched_bio_merge() {
368856424794741 |   1)               |          dd_bio_merge() {
368856424795251 |   1)               |            blk_mq_sched_try_merge() {
368856424795597 |   1)               |              elv_merge() {
368856424795908 |   1)   0.342 us    |                elv_rqhash_find();
368856424796578 |   1)   0.478 us    |                dd_request_merge();
368856424797273 |   1)   1.756 us    |              }
368856424797545 |   1)   2.341 us    |            }
368856424797815 |   1)   3.164 us    |          }
368856424798070 |   1)   4.039 us    |        }
368856424798442 |   1)               |        blk_mq_get_request() {
368856424798827 |   1)               |          blk_mq_get_tag() {
368856424799353 |   1)   0.727 us    |            __blk_mq_get_tag();
368856424800121 |   1)   1.345 us    |          }
368856424800610 |   1)   0.340 us    |          ktime_get();
368856424801261 |   1)   0.308 us    |          dd_prepare_request();
368856424801776 |   1)   3.403 us    |        }
368856424802176 |   1)               |        blk_init_request_from_bio() {
368856424802498 |   1)               |          blk_rq_bio_prep() {
368856424802809 |   1)   0.308 us    |            bio_phys_segments();
368856424803335 |   1)   0.885 us    |          }
368856424803647 |   1)   1.549 us    |        }
368856424803974 |   1)               |        blk_account_io_start() {
368856424804399 |   1)   0.393 us    |          disk_map_sector_rcu();
368856424805272 |   1)   0.540 us    |          part_inc_in_flight();
368856424805838 |   1)   0.466 us    |          update_io_ticks();
368856424806515 |   1)   2.605 us    |        }
368856424806867 |   1)   0.371 us    |        blk_add_rq_to_plug();
368856424807436 |   1) + 16.073 us   |      }
368856424807739 |   1) + 21.357 us   |    }
368856424808006 |   1) + 22.825 us   |  }
368856438456432 |   3)               |      submit_bio() {
368856438457044 |   3)               |        generic_make_request() {
368856438457458 |   3)   0.439 us    |          blk_queue_enter();
368856438458320 |   3)               |          generic_make_request_checks() {
368856438458729 |   3)   0.412 us    |            should_fail_bio();
368856438459459 |   3)   0.441 us    |            __disk_get_part();
368856438460352 |   3)   0.463 us    |            ktime_get();
368856438461035 |   3)   2.863 us    |          }
368856438461504 |   3)               |          blk_mq_make_request() {
368856438461885 |   3)   0.392 us    |            blk_queue_bounce();
368856438462633 |   3)   0.483 us    |            blk_queue_split();
368856438463434 |   3)   0.394 us    |            blk_attempt_plug_merge();
368856438464214 |   3)               |            __blk_mq_sched_bio_merge() {
368856438464787 |   3)               |              dd_bio_merge() {
368856438465178 |   3)   0.826 us    |                blk_mq_sched_try_merge();
368856438466300 |   3)   1.657 us    |              }
368856438466608 |   3)   2.482 us    |            } /* __blk_mq_sched_bio_merge */
368856438467029 |   3)               |            blk_mq_get_request() {
368856438467434 |   3)               |              blk_mq_get_tag() {
368856438467829 |   3)   0.531 us    |                __blk_mq_get_tag();
368856438468622 |   3)   1.283 us    |              }
368856438469080 |   3)   0.445 us    |              ktime_get();
368856438469862 |   3)   0.385 us    |              dd_prepare_request();
368856438470491 |   3)   3.542 us    |            }
368856438470944 |   3)               |            blk_init_request_from_bio() {
368856438471313 |   3)               |              blk_rq_bio_prep() {
368856438471641 |   3)   0.322 us    |                bio_phys_segments();
368856438472267 |   3)   1.022 us    |              }
368856438472575 |   3)   1.739 us    |            }
368856438472955 |   3)               |            blk_account_io_start() {
368856438473392 |   3)   0.424 us    |              disk_map_sector_rcu();
368856438474117 |   3)   0.401 us    |              part_inc_in_flight();
368856438474816 |   3)   0.429 us    |              update_io_ticks();
368856438475491 |   3)   2.599 us    |            }
368856438475911 |   3)   0.423 us    |            blk_add_rq_to_plug();
368856438476560 |   3) + 15.133 us   |          }
368856438476908 |   3) + 19.971 us   |        }
368856438477240 |   3) + 21.132 us   |      }
368856438527524 |   3)               |      submit_bio() {
368856438528174 |   3)               |        generic_make_request() {
368856438528796 |   3)   0.621 us    |          blk_queue_enter();
368856438529865 |   3)               |          generic_make_request_checks() {
368856438530459 |   3)   0.580 us    |            should_fail_bio();
368856438531544 |   3)   0.595 us    |            __disk_get_part();
368856438532656 |   3)   0.588 us    |            ktime_get();
368856438533655 |   3)   3.892 us    |          }
368856438534273 |   3)               |          blk_mq_make_request() {
368856438534721 |   3)   0.636 us    |            blk_queue_bounce();
368856438535690 |   3)   0.411 us    |            blk_queue_split();
368856438536452 |   3)   0.373 us    |            blk_attempt_plug_merge();
368856438537190 |   3)               |            __blk_mq_sched_bio_merge() {
368856438537708 |   3)               |              dd_bio_merge() {
368856438538090 |   3)   0.792 us    |                blk_mq_sched_try_merge();
368856438539163 |   3)   1.562 us    |              }
368856438539469 |   3)   2.385 us    |            }
368856438539839 |   3)               |            blk_mq_get_request() {
368856438540178 |   3)               |              blk_mq_get_tag() {
368856438540504 |   3)   0.386 us    |                __blk_mq_get_tag();
368856438541187 |   3)   1.044 us    |              }
368856438541580 |   3)   0.384 us    |              ktime_get();
368856438542333 |   3)   0.382 us    |              dd_prepare_request();
368856438542983 |   3)   3.196 us    |            }
368856438543388 |   3)               |            blk_init_request_from_bio() {
368856438543747 |   3)               |              blk_rq_bio_prep() {
368856438544049 |   3)   0.309 us    |                bio_phys_segments();
368856438544675 |   3)   0.985 us    |              }
368856438544981 |   3)   1.659 us    |            }
368856438545354 |   3)               |            blk_account_io_start() {
368856438545806 |   3)   0.419 us    |              disk_map_sector_rcu();
368856438546531 |   3)   0.415 us    |              part_inc_in_flight();
368856438547223 |   3)   0.384 us    |              update_io_ticks();
368856438547846 |   3)   2.551 us    |            }
368856438548260 |   3)   0.404 us    |            blk_add_rq_to_plug();
368856438548885 |   3) + 14.807 us   |          }
368856438549223 |   3) + 21.233 us   |        }
368856438549545 |   3) + 22.326 us   |      }
368856438558048 |   3)               |      submit_bio() {
368856438558472 |   3)               |        generic_make_request() {
368856438559147 |   3)   0.359 us    |          blk_queue_enter();
368856438559513 |   3)               |          generic_make_request_checks() {
368856438559894 |   3)   0.357 us    |            should_fail_bio();
368856438560567 |   3)   0.363 us    |            __disk_get_part();
368856438561274 |   3)   0.391 us    |            ktime_get();
368856438561937 |   3)   2.467 us    |          }
368856438562303 |   3)               |          blk_mq_make_request() {
368856438562633 |   3)   0.341 us    |            blk_queue_bounce();
368856438563305 |   3)   0.374 us    |            blk_queue_split();
368856438563988 |   3)               |            blk_attempt_plug_merge() {
368856438564446 |   3)   0.425 us    |              blk_rq_merge_ok();
368856438565194 |   3)   0.394 us    |              blk_try_merge();
368856438565844 |   3)   1.893 us    |            }
368856438566195 |   3)               |            __blk_mq_sched_bio_merge() {
368856438566603 |   3)               |              dd_bio_merge() {
368856438566920 |   3)   0.693 us    |                blk_mq_sched_try_merge();
368856438567932 |   3)   1.410 us    |              }
368856438568241 |   3)   2.083 us    |            }
368856438568596 |   3)               |            blk_mq_get_request() {
368856438568936 |   3)               |              blk_mq_get_tag() {
368856438569249 |   3)   0.396 us    |                __blk_mq_get_tag();
368856438570032 |   3)   0.580 us    |                blk_mq_run_hw_queue();
368856438570896 |   3)   0.379 us    |                __blk_mq_get_tag();
368856438571638 |   3)   0.463 us    |                prepare_to_wait_exclusive();
368856438572429 |   3)   0.404 us    |                __blk_mq_get_tag();
368856438573199 |   3) # 6837.341 us |                io_schedule();
368856445411349 |   3)   0.504 us    |                finish_wait();
368856445412513 |   3)   2.688 us    |                blk_mq_run_hw_queue();
368856445415744 |   3)   0.868 us    |                __blk_mq_get_tag();
368856445417088 |   3)   0.500 us    |                finish_wait();
368856445418136 |   3) # 6849.196 us |              }
368856445418791 |   3)   0.554 us    |              ktime_get();
368856445419848 |   3)   0.543 us    |              dd_prepare_request();
368856445420770 |   3) # 6852.192 us |            }
368856445421438 |   3)               |            blk_init_request_from_bio() {
368856445422041 |   3)               |              blk_rq_bio_prep() {
368856445422559 |   3)   0.530 us    |                bio_phys_segments();
368856445423505 |   3)   1.616 us    |              }
368856445423956 |   3)   2.609 us    |            }
368856445424554 |   3)               |            blk_account_io_start() {
368856445425252 |   3)   0.589 us    |              disk_map_sector_rcu();
368856445426403 |   3)   0.640 us    |              part_inc_in_flight();
368856445427427 |   3)   0.536 us    |              update_io_ticks();
368856445428356 |   3)   3.881 us    |            }
368856445428921 |   3)   0.609 us    |            blk_add_rq_to_plug();
368856445429900 |   3) # 6867.616 us |          }
368856445430384 |   3) # 6871.969 us |        }
368856445430792 |   3) # 6873.185 us |      }
368856445444187 |   3)               |      submit_bio() {
368856445444862 |   3)               |        generic_make_request() {
368856445445450 |   3)   0.601 us    |          blk_queue_enter();
368856445446478 |   3)               |          generic_make_request_checks() {
368856445447036 |   3)   0.534 us    |            should_fail_bio();
368856445448153 |   3)   0.652 us    |            __disk_get_part();
368856445449236 |   3)   0.533 us    |            ktime_get();
368856445450123 |   3)   3.788 us    |          }
368856445450689 |   3)               |          blk_mq_make_request() {
368856445451292 |   3)   0.578 us    |            blk_queue_bounce();
368856445452386 |   3)   0.667 us    |            blk_queue_split();
368856445453507 |   3)               |            blk_attempt_plug_merge() {
368856445454491 |   3)   0.533 us    |              blk_rq_merge_ok();
368856445455004 |   3)   0.513 us    |              blk_try_merge();
368856445455951 |   3)   2.542 us    |            }
368856445456538 |   3)               |            __blk_mq_sched_bio_merge() {
368856445457229 |   3)               |              dd_bio_merge() {
368856445457765 |   3)   1.124 us    |                blk_mq_sched_try_merge();
368856445459311 |   3)   2.240 us    |              }
368856445459730 |   3)   3.283 us    |            }
368856445460346 |   3)               |            blk_mq_get_request() {
368856445460879 |   3)               |              blk_mq_get_tag() {
368856445461390 |   3)   0.565 us    |                __blk_mq_get_tag();
368856445462528 |   3)   0.827 us    |                blk_mq_run_hw_queue();
368856445463806 |   3)   0.590 us    |                __blk_mq_get_tag();
368856445464878 |   3)   0.568 us    |                prepare_to_wait_exclusive();
368856445466464 |   3)   1.154 us    |                __blk_mq_get_tag();
368856445467596 |   3) # 8703.435 us |                io_schedule();
 ------------------------------------------
 2)  write-s-6471  =>  jbd2/sd-1491 
 ------------------------------------------

368856445544112 |   2)               |  submit_bio() {
368856445545258 |   2)               |    generic_make_request() {
368856445545671 |   2)   0.530 us    |      blk_queue_enter();
368856445546623 |   2)               |      generic_make_request_checks() {
368856445547002 |   2)   0.353 us    |        should_fail_bio();
368856445547669 |   2)   0.349 us    |        __disk_get_part();
368856445548586 |   2)   0.448 us    |        ktime_get();
368856445549271 |   2)   2.796 us    |      }
368856445549702 |   2)               |      blk_mq_make_request() {
368856445550046 |   2)   0.359 us    |        blk_queue_bounce();
368856445550771 |   2)   0.402 us    |        blk_queue_split();
368856445551536 |   2)   0.394 us    |        blk_attempt_plug_merge();
368856445552294 |   2)               |        __blk_mq_sched_bio_merge() {
368856445552898 |   2)               |          dd_bio_merge() {
368856445553349 |   2)               |            blk_mq_sched_try_merge() {
368856445553711 |   2)               |              elv_merge() {
368856445554065 |   2)   0.396 us    |                elv_rqhash_find();
368856445554810 |   2)   0.488 us    |                dd_request_merge();
368856445555577 |   2)   1.911 us    |              }
368856445555916 |   2)   2.598 us    |            }
368856445556242 |   2)   3.416 us    |          }
368856445556551 |   2)   4.313 us    |        }
368856445556962 |   2)               |        blk_mq_get_request() {
368856445557344 |   2)               |          blk_mq_get_tag() {
368856445557787 |   2)   0.601 us    |            __blk_mq_get_tag();
368856445558617 |   2)   1.310 us    |          }
368856445559105 |   2)   0.408 us    |          ktime_get();
368856445559857 |   2)   0.343 us    |          dd_prepare_request();
368856445560483 |   2)   3.575 us    |        }
368856445560908 |   2)               |        blk_init_request_from_bio() {
368856445561260 |   2)               |          blk_rq_bio_prep() {
368856445561613 |   2)   0.354 us    |            bio_phys_segments();
368856445562242 |   2)   1.034 us    |          }
368856445562550 |   2)   1.705 us    |        }
368856445562932 |   2)               |        blk_account_io_start() {
368856445563348 |   2)   0.411 us    |          disk_map_sector_rcu();
368856445564118 |   2)   0.434 us    |          part_inc_in_flight();
368856445564822 |   2)   0.553 us    |          update_io_ticks();
368856445565635 |   2)   2.768 us    |        }
368856445566088 |   2)   0.409 us    |        blk_add_rq_to_plug();
368856445566741 |   2) + 17.091 us   |      }
368856445567087 |   2) + 21.909 us   |    }
368856445567388 |   2) + 23.754 us   |  }
368856445572027 |   2)               |  submit_bio() {
368856445572397 |   2)               |    generic_make_request() {
368856445573393 |   2)   0.356 us    |      blk_queue_enter();
368856445573801 |   2)               |      generic_make_request_checks() {
368856445574188 |   2)   0.378 us    |        should_fail_bio();
368856445574848 |   2)   0.344 us    |        __disk_get_part();
368856445575545 |   2)   0.386 us    |        ktime_get();
368856445576218 |   2)   2.469 us    |      }
368856445576589 |   2)               |      blk_mq_make_request() {
368856445576924 |   2)   0.342 us    |        blk_queue_bounce();
368856445577583 |   2)   0.365 us    |        blk_queue_split();
368856445578261 |   2)               |        blk_attempt_plug_merge() {
368856445578648 |   2)   0.374 us    |          blk_rq_merge_ok();
368856445579328 |   2)   0.364 us    |          blk_try_merge();
368856445580100 |   2)               |          bio_attempt_back_merge() {
368856445580571 |   2)               |            ll_back_merge_fn() {
368856445580935 |   2)   0.348 us    |              bio_phys_segments();
368856445581572 |   2)   1.175 us    |            }
368856445581949 |   2)               |            blk_account_io_start() {
368856445582317 |   2)   0.365 us    |              update_io_ticks();
368856445582947 |   2)   1.046 us    |            }
368856445583262 |   2)   3.286 us    |          }
368856445583588 |   2)   5.363 us    |        }
368856445583917 |   2)   7.362 us    |      }
368856445584245 |   2) + 11.894 us   |    }
368856445584537 |   2) + 12.606 us   |  }
368856445588954 |   2)               |  submit_bio() {
368856445589316 |   2)               |    generic_make_request() {
368856445589657 |   2)   0.371 us    |      blk_queue_enter();
368856445590364 |   2)               |      generic_make_request_checks() {
368856445590701 |   2)   0.339 us    |        should_fail_bio();
368856445591358 |   2)   0.344 us    |        __disk_get_part();
368856445592078 |   2)   0.392 us    |        ktime_get();
368856445592751 |   2)   2.427 us    |      }
368856445593132 |   2)               |      blk_mq_make_request() {
368856445593479 |   2)   0.356 us    |        blk_queue_bounce();
368856445594151 |   2)   0.366 us    |        blk_queue_split();
368856445594844 |   2)               |        blk_attempt_plug_merge() {
368856445595193 |   2)   0.358 us    |          blk_rq_merge_ok();
368856445595860 |   2)   0.344 us    |          blk_try_merge();
368856445596523 |   2)               |          bio_attempt_back_merge() {
368856445596854 |   2)               |            ll_back_merge_fn() {
368856445597191 |   2)   0.341 us    |              bio_phys_segments();
368856445597818 |   2)   0.996 us    |            }
368856445598168 |   2)               |            blk_account_io_start() {
368856445598502 |   2)   0.346 us    |              update_io_ticks();
368856445599131 |   2)   0.992 us    |            }
368856445599451 |   2)   2.961 us    |          }
368856445599770 |   2)   4.968 us    |        }
368856445600093 |   2)   6.999 us    |      }
368856445600425 |   2) + 11.148 us   |    }
368856445600719 |   2) + 11.854 us   |  }
368856445605114 |   2)               |  submit_bio() {
368856445605477 |   2)               |    generic_make_request() {
368856445605813 |   2)   0.347 us    |      blk_queue_enter();
368856445606477 |   2)               |      generic_make_request_checks() {
368856445606817 |   2)   0.344 us    |        should_fail_bio();
368856445607480 |   2)   0.345 us    |        __disk_get_part();
368856445608201 |   2)   0.396 us    |        ktime_get();
368856445608875 |   2)   2.436 us    |      }
368856445609254 |   2)               |      blk_mq_make_request() {
368856445609600 |   2)   0.354 us    |        blk_queue_bounce();
368856445610270 |   2)   0.359 us    |        blk_queue_split();
368856445610956 |   2)               |        blk_attempt_plug_merge() {
368856445611294 |   2)   0.345 us    |          blk_rq_merge_ok();
368856445611953 |   2)   0.346 us    |          blk_try_merge();
368856445612608 |   2)               |          bio_attempt_back_merge() {
368856445613278 |   2)               |            ll_back_merge_fn() {
368856445613278 |   2)   0.364 us    |              bio_phys_segments();
368856445613938 |   2)   1.028 us    |            }
368856445614285 |   2)               |            blk_account_io_start() {
368856445614628 |   2)   0.340 us    |              update_io_ticks();
368856445615254 |   2)   0.999 us    |            }
368856445615573 |   2)   2.997 us    |          }
368856445615894 |   2)   4.978 us    |        }
368856445616217 |   2)   7.001 us    |      }
368856445616549 |   2) + 11.114 us   |    }
368856445616846 |   2) + 11.824 us   |  }
368856445621236 |   2)               |  submit_bio() {
368856445621599 |   2)               |    generic_make_request() {
368856445621938 |   2)   0.350 us    |      blk_queue_enter();
368856445622608 |   2)               |      generic_make_request_checks() {
368856445622954 |   2)   0.351 us    |        should_fail_bio();
368856445623619 |   2)   0.346 us    |        __disk_get_part();
368856445624723 |   2)   0.426 us    |        ktime_get();
368856445625398 |   2)   2.829 us    |      }
368856445625777 |   2)               |      blk_mq_make_request() {
368856445626119 |   2)   0.351 us    |        blk_queue_bounce();
368856445626796 |   2)   0.366 us    |        blk_queue_split();
368856445627482 |   2)               |        blk_attempt_plug_merge() {
368856445627822 |   2)   0.346 us    |          blk_rq_merge_ok();
368856445628501 |   2)   0.338 us    |          blk_try_merge();
368856445629160 |   2)               |          bio_attempt_back_merge() {
368856445629497 |   2)               |            ll_back_merge_fn() {
368856445629835 |   2)   0.338 us    |              bio_phys_segments();
368856445630458 |   2)   0.999 us    |            }
368856445630805 |   2)               |            blk_account_io_start() {
368856445631141 |   2)   0.338 us    |              update_io_ticks();
368856445631769 |   2)   0.995 us    |            }
368856445632083 |   2)   2.959 us    |          }
368856445632402 |   2)   4.958 us    |        }
368856445632723 |   2)   6.985 us    |      }
368856445633052 |   2) + 11.493 us   |    }
368856445633346 |   2) + 12.215 us   |  }
368856445637719 |   2)               |  submit_bio() {
368856445638082 |   2)               |    generic_make_request() {
368856445638424 |   2)   0.347 us    |      blk_queue_enter();
368856445639094 |   2)               |      generic_make_request_checks() {
368856445639463 |   2)   0.350 us    |        should_fail_bio();
368856445640127 |   2)   0.343 us    |        __disk_get_part();
368856445640858 |   2)   0.392 us    |        ktime_get();
368856445641533 |   2)   2.482 us    |      }
368856445641914 |   2)               |      blk_mq_make_request() {
368856445642261 |   2)   0.354 us    |        blk_queue_bounce();
368856445642931 |   2)   0.366 us    |        blk_queue_split();
368856445665455 |   2)               |        blk_attempt_plug_merge() {
368856445665964 |   2)   0.367 us    |          blk_rq_merge_ok();
368856445666653 |   2)   0.364 us    |          blk_try_merge();
368856445667371 |   2)               |          bio_attempt_back_merge() {
368856445667725 |   2)               |            ll_back_merge_fn() {
368856445668083 |   2)   0.352 us    |              bio_phys_segments();
368856445668709 |   2)   1.038 us    |            }
368856445669095 |   2)               |            blk_account_io_start() {
368856445669492 |   2)   0.417 us    |              update_io_ticks();
368856445670129 |   2)   1.099 us    |            }
368856445670446 |   2)   3.162 us    |          }
368856445670794 |   2) + 27.210 us   |        }
368856445671146 |   2) + 29.271 us   |      }
368856445671500 |   2) + 33.460 us   |    }
368856445671831 |   2) + 34.162 us   |  }
368856445761975 |   2)               |  submit_bio() {
368856445762455 |   2)               |    generic_make_request() {
368856445762799 |   2)   0.380 us    |      blk_queue_enter();
368856445763569 |   2)               |      generic_make_request_checks() {
368856445764224 |   2)   0.354 us    |        should_fail_bio();
368856445764581 |   2)   0.344 us    |        __disk_get_part();
368856445765403 |   2)   0.406 us    |        ktime_get();
368856445766080 |   2)   2.608 us    |      }
368856445766502 |   2)               |      blk_mq_make_request() {
368856445766848 |   2)   0.380 us    |        blk_queue_bounce();
368856445767553 |   2)   0.381 us    |        blk_queue_split();
368856445768315 |   2)               |        blk_mq_get_request() {
368856445768727 |   2)               |          blk_mq_get_tag() {
368856445769148 |   2)   0.489 us    |            __blk_mq_get_tag();
368856445769840 |   2)   1.152 us    |          }
368856445770271 |   2)   0.399 us    |          ktime_get();
368856445771009 |   2)   2.751 us    |        }
368856445771462 |   2)               |        blk_init_request_from_bio() {
368856445771814 |   2)               |          blk_rq_bio_prep() {
368856445772159 |   2)   0.348 us    |            bio_phys_segments();
368856445772777 |   2)   1.017 us    |          }
368856445773079 |   2)   1.718 us    |        }
368856445773480 |   2)               |        blk_account_io_start() {
368856445773916 |   2)   0.423 us    |          disk_map_sector_rcu();
368856445774598 |   2)   0.371 us    |          part_inc_in_flight();
368856445775276 |   2)   0.370 us    |          update_io_ticks();
368856445775909 |   2)   2.512 us    |        }
368856445776286 |   2)               |        blk_insert_flush() {
368856445776798 |   2)               |          blk_flush_complete_seq() {
368856445777397 |   2)               |            blk_rq_init() {
368856445777822 |   2)   0.398 us    |              ktime_get();
368856445778473 |   2)   1.187 us    |            }
368856445778951 |   2)               |            blk_mq_add_to_requeue_list() {
368856445779395 |   2)               |              kblockd_mod_delayed_work_on() {
368856445779831 |   2)   5.579 us    |                mod_delayed_work_on();
368856445785655 |   2)   6.336 us    |              }
368856445786261 |   2)   7.148 us    |            }
368856445786603 |   2)   9.858 us    |          }
368856445786924 |   2) + 10.701 us   |        }
368856445787395 |   2)               |        blk_mq_run_hw_queue() {
368856445787885 |   2)   0.433 us    |          dd_has_work();
368856445788558 |   2)   1.290 us    |        }
368856445788922 |   2) + 22.440 us   |      }
368856445789258 |   2) + 26.862 us   |    }
368856445789562 |   2) + 27.746 us   |  }
 ------------------------------------------
 0)  kworker-723   =>  write-s-6471 
 ------------------------------------------

368856453784974 |   0)               |  submit_bio() {
368856453785852 |   0)               |    generic_make_request() {
368856453786352 |   0)   0.515 us    |      blk_queue_enter();
368856453787244 |   0)               |      generic_make_request_checks() {
368856453787730 |   0)   0.512 us    |        should_fail_bio();
368856453788565 |   0)   0.494 us    |        __disk_get_part();
368856453789412 |   0)               |        bio_endio() {
368856453789843 |   0)               |          submit_bio_wait_endio() {
368856453790228 |   0)               |            complete() {
368856453790602 |   0)               |              __wake_up_locked() {
368856453790988 |   0)   0.386 us    |                __wake_up_common();
368856453791626 |   0)   1.088 us    |              }
368856453791950 |   0)   1.814 us    |            }
368856453792256 |   0)   2.509 us    |          }
368856453792568 |   0)   3.278 us    |        }
368856453792909 |   0)   5.810 us    |      }
368856453793248 |   0)   7.544 us    |    }
368856453793595 |   0)   9.116 us    |  }
368856453817995 |   0)               |  submit_bio() {
368856453818509 |   0)               |    generic_make_request() {
368856453818853 |   0)   0.367 us    |      blk_queue_enter();
368856453819600 |   0)               |      generic_make_request_checks() {
368856453819941 |   0)   0.346 us    |        should_fail_bio();
368856453820933 |   0)   0.376 us    |        __disk_get_part();
368856453821558 |   0)   0.452 us    |        ktime_get();
368856453822316 |   0)   2.786 us    |      }
368856453822844 |   0)               |      blk_mq_make_request() {
368856453823287 |   0)   0.414 us    |        blk_queue_bounce();
368856453824555 |   0)   1.106 us    |        blk_queue_split();
368856453825519 |   0)   0.434 us    |        blk_attempt_plug_merge();
368856453826346 |   0)               |        __blk_mq_sched_bio_merge() {
368856453826935 |   0)               |          dd_bio_merge() {
368856453827360 |   0)               |            blk_mq_sched_try_merge() {
368856453827809 |   0)               |              elv_merge() {
368856453828160 |   0)   0.341 us    |                elv_rqhash_find();
368856453828840 |   0)   0.565 us    |                dd_request_merge();
368856453829670 |   0)   1.973 us    |              }
368856453829987 |   0)   2.673 us    |            }
368856453830308 |   0)   3.496 us    |          }
368856453830610 |   0)   4.391 us    |        }
368856453831041 |   0)               |        blk_mq_get_request() {
368856453831456 |   0)               |          blk_mq_get_tag() {
368856453831925 |   0)   0.606 us    |            __blk_mq_get_tag();
368856453832774 |   0)   1.364 us    |          }
368856453833353 |   0)   0.431 us    |          ktime_get();
368856453834109 |   0)   0.371 us    |          dd_prepare_request();
368856453834725 |   0)   3.757 us    |        }
368856453835243 |   0)               |        blk_init_request_from_bio() {
368856453835630 |   0)               |          blk_rq_bio_prep() {
368856453836010 |   0)   0.371 us    |            bio_phys_segments();
368856453836651 |   0)   1.108 us    |          }
368856453836957 |   0)   1.851 us    |        }
368856453837348 |   0)               |        blk_account_io_start() {
368856453837810 |   0)   0.468 us    |          disk_map_sector_rcu();
368856453838580 |   0)   0.401 us    |          part_inc_in_flight();
368856453839252 |   0)   0.399 us    |          update_io_ticks();
368856453839900 |   0)   2.634 us    |        }
368856453840343 |   0)   0.440 us    |        blk_add_rq_to_plug();
368856453841026 |   0) + 18.319 us   |      }
368856453841404 |   0) + 23.047 us   |    }
368856453841734 |   0) + 23.872 us   |  }
368856453849937 |   0)               |  submit_bio() {
368856453850326 |   0)               |    generic_make_request() {
368856453850688 |   0)   0.371 us    |      blk_queue_enter();
368856453851367 |   0)               |      generic_make_request_checks() {
368856453851717 |   0)   0.356 us    |        should_fail_bio();
368856453852386 |   0)   0.354 us    |        __disk_get_part();
368856453853075 |   0)   0.377 us    |        ktime_get();
368856453853735 |   0)   2.419 us    |      }
368856453854108 |   0)               |      blk_mq_make_request() {
368856453854444 |   0)   0.344 us    |        blk_queue_bounce();
368856453855092 |   0)   0.384 us    |        blk_queue_split();
368856453855795 |   0)               |        blk_attempt_plug_merge() {
368856453856229 |   0)   0.443 us    |          blk_rq_merge_ok();
368856453856966 |   0)   0.398 us    |          blk_try_merge();
368856453857613 |   0)   1.861 us    |        }
368856453857982 |   0)               |        __blk_mq_sched_bio_merge() {
368856453858331 |   0)               |          dd_bio_merge() {
368856453858700 |   0)               |            blk_mq_sched_try_merge() {
368856453859024 |   0)               |              elv_merge() {
368856453859311 |   0)   0.310 us    |                elv_rqhash_find();
368856453860003 |   0)   0.402 us    |                dd_request_merge();
368856453860711 |   0)   1.716 us    |              }
368856453861037 |   0)   2.379 us    |            }
368856453861351 |   0)   3.051 us    |          }
368856453861652 |   0)   3.727 us    |        }
368856453862024 |   0)               |        blk_mq_get_request() {
368856453862389 |   0)               |          blk_mq_get_tag() {
368856453863102 |   0)   0.416 us    |            __blk_mq_get_tag();
368856453863421 |   0)   1.093 us    |          }
368856453863819 |   0)   0.396 us    |          ktime_get();
368856453864545 |   0)   0.358 us    |          dd_prepare_request();
368856453865155 |   0)   3.191 us    |        }
368856453865539 |   0)               |        blk_init_request_from_bio() {
368856453865888 |   0)               |          blk_rq_bio_prep() {
368856453866232 |   0)   0.351 us    |            bio_phys_segments();
368856453866845 |   0)   1.013 us    |          }
368856453867145 |   0)   1.674 us    |        }
368856453867507 |   0)               |        blk_account_io_start() {
368856453867891 |   0)   0.392 us    |          disk_map_sector_rcu();
368856453868593 |   0)   0.367 us    |          part_inc_in_flight();
368856453869236 |   0)   0.336 us    |          update_io_ticks();
368856453869846 |   0)   2.393 us    |        }
368856453870267 |   0)   0.418 us    |        blk_add_rq_to_plug();
368856453870910 |   0) + 16.843 us   |      }
368856453871252 |   0) + 20.969 us   |    }
368856453871541 |   0) + 21.732 us   |  }
368856453879039 |   0)               |  submit_bio() {
368856453879406 |   0)               |    generic_make_request() {
368856453879737 |   0)   0.341 us    |      blk_queue_enter();
368856453880788 |   0)               |      generic_make_request_checks() {
368856453881172 |   0)   0.376 us    |        should_fail_bio();
368856453881827 |   0)   0.341 us    |        __disk_get_part();
368856453882515 |   0)   0.372 us    |        ktime_get();
368856453883173 |   0)   2.780 us    |      }
368856453883544 |   0)               |      blk_mq_make_request() {
368856453883876 |   0)   0.341 us    |        blk_queue_bounce();
368856453884524 |   0)   0.358 us    |        blk_queue_split();
368856453885189 |   0)               |        blk_attempt_plug_merge() {
368856453885537 |   0)   0.356 us    |          blk_rq_merge_ok();
368856453886217 |   0)   0.371 us    |          blk_try_merge();
368856453886910 |   0)   0.371 us    |          blk_rq_merge_ok();
368856453887568 |   0)   0.340 us    |          blk_try_merge();
368856453888203 |   0)   3.038 us    |        }
368856453888574 |   0)               |        __blk_mq_sched_bio_merge() {
368856453888941 |   0)               |          dd_bio_merge() {
368856453889289 |   0)               |            blk_mq_sched_try_merge() {
368856453889613 |   0)               |              elv_merge() {
368856453889914 |   0)   0.307 us    |                elv_rqhash_find();
368856453890558 |   0)   0.393 us    |                dd_request_merge();
368856453891252 |   0)   1.662 us    |              }
368856453891572 |   0)   2.308 us    |            }
368856453891916 |   0)   3.008 us    |          }
368856453892221 |   0)   3.694 us    |        }
368856453892566 |   0)               |        blk_mq_get_request() {
368856453892899 |   0)               |          blk_mq_get_tag() {
368856453893270 |   0)   0.395 us    |            __blk_mq_get_tag();
368856453893909 |   0)   1.042 us    |          }
368856453894377 |   0)   0.374 us    |          ktime_get();
368856453895070 |   0)   0.334 us    |          dd_prepare_request();
368856453895692 |   0)   3.156 us    |        }
368856453896076 |   0)               |        blk_init_request_from_bio() {
368856453896415 |   0)               |          blk_rq_bio_prep() {
368856453896743 |   0)   0.333 us    |            bio_phys_segments();
368856453897356 |   0)   0.989 us    |          }
368856453897656 |   0)   1.647 us    |        }
368856453898024 |   0)               |        blk_account_io_start() {
368856453898408 |   0)   0.396 us    |          disk_map_sector_rcu();
368856453899073 |   0)   0.359 us    |          part_inc_in_flight();
368856453899724 |   0)   0.337 us    |          update_io_ticks();
368856453900339 |   0)   2.372 us    |        }
368856453900707 |   0)   0.378 us    |        blk_add_rq_to_plug();
368856453901345 |   0) + 17.832 us   |      }
368856453901681 |   0) + 22.319 us   |    }
368856453901965 |   0) + 23.030 us   |  } /* submit_bio */
368856453909034 |   0)               |  submit_bio() {
368856453909402 |   0)               |    generic_make_request() {
368856453909731 |   0)   0.339 us    |      blk_queue_enter();
368856453910386 |   0)               |      generic_make_request_checks() {
368856453910745 |   0)   0.337 us    |        should_fail_bio();
368856453911410 |   0)   0.355 us    |        __disk_get_part();
368856453912121 |   0)   0.391 us    |        ktime_get();
368856453912786 |   0)   2.436 us    |      }
368856453913157 |   0)               |      blk_mq_make_request() {
368856453913494 |   0)   0.347 us    |        blk_queue_bounce();
368856453914156 |   0)   0.364 us    |        blk_queue_split();
368856453914829 |   0)               |        blk_attempt_plug_merge() {
368856453915168 |   0)   0.350 us    |          blk_rq_merge_ok();
368856453915845 |   0)   0.368 us    |          blk_try_merge();
368856453916501 |   0)   0.339 us    |          blk_rq_merge_ok();
368856453917146 |   0)   0.334 us    |          blk_try_merge();
368856453917796 |   0)   0.339 us    |          blk_rq_merge_ok();
368856453918443 |   0)   0.338 us    |          blk_try_merge();
368856453919064 |   0)   4.275 us    |        }
368856453919413 |   0)               |        __blk_mq_sched_bio_merge() {
368856453919776 |   0)               |          dd_bio_merge() {
368856453920130 |   0)               |            blk_mq_sched_try_merge() {
368856453920452 |   0)               |              elv_merge() {
368856453920746 |   0)   0.324 us    |                elv_rqhash_find();
368856453921409 |   0)   0.394 us    |                dd_request_merge();
368856453922091 |   0)   1.666 us    |              }
368856453922410 |   0)   2.310 us    |            }
368856453922724 |   0)   2.992 us    |          }
368856453923030 |   0)   3.652 us    |        }
368856453923381 |   0)               |        blk_mq_get_request() {
368856453923718 |   0)               |          blk_mq_get_tag() {
368856453924055 |   0)   0.366 us    |            __blk_mq_get_tag();
368856453924694 |   0)   1.013 us    |          }
368856453925083 |   0)   0.383 us    |          ktime_get();
368856453926112 |   0)   0.648 us    |          dd_prepare_request();
368856453926730 |   0)   3.388 us    |        }
368856453927084 |   0)               |        blk_init_request_from_bio() {
368856453927422 |   0)               |          blk_rq_bio_prep() {
368856453927747 |   0)   0.337 us    |            bio_phys_segments();
368856453928360 |   0)   0.985 us    |          }
368856453928666 |   0)   1.616 us    |        }
368856453929029 |   0)               |        blk_account_io_start() {
368856453929391 |   0)   0.379 us    |          disk_map_sector_rcu();
368856453930059 |   0)   0.355 us    |          part_inc_in_flight();
368856453930709 |   0)   0.341 us    |          update_io_ticks();
368856453931315 |   0)   2.344 us    |        }
368856453931680 |   0)   0.347 us    |        blk_add_rq_to_plug();
368856453932296 |   0) + 19.175 us   |      }
368856453932640 |   0) + 23.279 us   |    }
368856453932931 |   0) + 24.017 us   |  }
368856453939840 |   0)               |  submit_bio() {
368856453940229 |   0)               |    generic_make_request() {
368856453940563 |   0)   0.338 us    |      blk_queue_enter();
368856453941217 |   0)               |      generic_make_request_checks() {
368856453941544 |   0)   0.333 us    |        should_fail_bio();
368856453942209 |   0)   0.357 us    |        __disk_get_part();
368856453942882 |   0)   0.370 us    |        ktime_get();
368856453943545 |   0)   2.360 us    |      }
368856453943911 |   0)               |      blk_mq_make_request() {
368856453944245 |   0)   0.339 us    |        blk_queue_bounce();
368856453944895 |   0)   0.363 us    |        blk_queue_split();
368856453945575 |   0)               |        blk_attempt_plug_merge() {
368856453945917 |   0)   0.351 us    |          blk_rq_merge_ok();
368856453946562 |   0)   0.334 us    |          blk_try_merge();
368856453947523 |   0)   0.339 us    |          blk_rq_merge_ok();
368856453947865 |   0)   0.336 us    |          blk_try_merge();
368856453948503 |   0)   0.339 us    |          blk_rq_merge_ok();
368856453949155 |   0)   0.341 us    |          blk_try_merge();
368856453949798 |   0)   0.337 us    |          blk_rq_merge_ok();
368856453950443 |   0)   0.337 us    |          blk_try_merge();
368856453951068 |   0)   5.530 us    |        }
368856453951442 |   0)               |        __blk_mq_sched_bio_merge() {
368856453951806 |   0)               |          dd_bio_merge() {
368856453952150 |   0)               |            blk_mq_sched_try_merge() {
368856453952477 |   0)               |              elv_merge() {
368856453952768 |   0)   0.302 us    |                elv_rqhash_find();
368856453953413 |   0)   0.393 us    |                dd_request_merge();
368856453954095 |   0)   1.651 us    |              }
368856453954415 |   0)   2.295 us    |            }
368856453954736 |   0)   2.962 us    |          }
368856453955040 |   0)   3.635 us    |        }
368856453955389 |   0)               |        blk_mq_get_request() {
368856453955725 |   0)               |          blk_mq_get_tag() {
368856453956059 |   0)   0.362 us    |            __blk_mq_get_tag();
368856453956697 |   0)   1.007 us    |          }
368856453957095 |   0)   0.388 us    |          ktime_get();
368856453957793 |   0)   0.347 us    |          dd_prepare_request();
368856453958419 |   0)   3.069 us    |        }
368856453958777 |   0)               |        blk_init_request_from_bio() {
368856453959109 |   0)               |          blk_rq_bio_prep() {
368856453959440 |   0)   0.336 us    |            bio_phys_segments();
368856453960050 |   0)   0.981 us    |          }
368856453960349 |   0)   1.610 us    |        }
368856453960695 |   0)               |        blk_account_io_start() {
368856453961057 |   0)   0.373 us    |          disk_map_sector_rcu();
368856453961724 |   0)   0.356 us    |          part_inc_in_flight();
368856453962372 |   0)   0.347 us    |          update_io_ticks();
368856453962988 |   0)   2.328 us    |        }
368856453963379 |   0)   0.358 us    |        blk_add_rq_to_plug();
368856453963997 |   0) + 20.115 us   |      }
368856453964335 |   0) + 24.139 us   |    }
368856453964622 |   0) + 24.878 us   |  }
368856454171533 |   3)   0.424 us    |                finish_wait();
368856454172464 |   3) + 11.778 us   |                blk_mq_run_hw_queue();
368856454184600 |   3)   0.536 us    |                __blk_mq_get_tag();
368856454185465 |   3)   0.342 us    |                finish_wait();
368856454186140 |   3) # 8725.488 us |              }
368856454186656 |   3)   0.466 us    |              ktime_get();
368856454187450 |   3)   0.369 us    |              dd_prepare_request();
368856454188080 |   3) # 8728.016 us |            }
368856454188562 |   3)               |            blk_init_request_from_bio() {
368856454188936 |   3)               |              blk_rq_bio_prep() {
368856454189239 |   3)   0.307 us    |                bio_phys_segments();
368856454189862 |   3)   1.000 us    |              }
368856454199295 |   3)   1.701 us    |            }
368856454200022 |   3)               |            blk_account_io_start() {
368856454200826 |   3)   0.814 us    |              disk_map_sector_rcu();
368856454202144 |   3)   0.689 us    |              part_inc_in_flight();
368856454203295 |   3)   0.661 us    |              update_io_ticks();
368856454204427 |   3)   4.520 us    |            }
368856454205049 |   3)   0.654 us    |            blk_add_rq_to_plug();
368856454206179 |   3) # 8755.560 us |          }
368856454206855 |   3) # 8762.131 us |        }
368856454207482 |   3) # 8763.411 us |      }
`;
