import { mergeDeep } from 'immutable';

export default function mergeDeeplyElements (page1, page2) {
  return page1.mergeDeep(page2);
}
