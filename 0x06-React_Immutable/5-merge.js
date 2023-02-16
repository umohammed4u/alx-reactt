import { List } from 'immutable';

function concatElements (page1, page2) {
  return List(page1).concat(List(page2));
}

function mergeElements (page1, page2) {
  if (page1 === page2) {
    return List(page2);
  } else {
    return List(page1).concat(List(page2));
  }
}

export {
  concatElements,
  mergeElements
};
