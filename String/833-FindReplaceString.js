// 833. Find And Replace in String
/*
  Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]
  Output: "eeebffff"
  Explanation: "a" starts at index 0 in S, so it's replaced by "eee".
  "cd" starts at index 2 in S, so it's replaced by "ffff".
*/

var findReplaceString = function(S, indexes, sources, targets) {
  let _replaceSources = [];
  let _replaceTargets = [];
  let _replaceIndexes = indexes.filter((indexesEle, index) => {
    let restS = S.substring(indexesEle);
    if (restS.indexOf(sources[index]) === 0) {
      _replaceSources.push(sources[index]);
      _replaceTargets.push(targets[index]);
      return true;
    }
    
    return false;
  });
  let replcaeMapping = _replaceIndexes.reduce((pV, cV, index) => {
    return {
      ...pV,
      [cV]: {
        source: _replaceSources[index],
        target: _replaceTargets[index],
      },
    };
  }, {});
  
  let replaceSources = [];
  let replaceIndexes = [];
  let replaceTargets = [];
  Object.keys(replcaeMapping).sort((a, b) => a - b).map(replaceIndex => {
    replaceIndexes.push(replaceIndex);
    replaceSources.push(replcaeMapping[replaceIndex].source);
    replaceTargets.push(replcaeMapping[replaceIndex].target);
  });
  
  let finalStr = '';
  let startIndex = 0;
  replaceIndexes.map((indexEle, index) => {
    finalStr = finalStr + S.substring(startIndex, indexEle) + replaceTargets[index];
    startIndex = Number(indexEle) + replaceSources[index].length;
  });
  finalStr = finalStr + S.substring(startIndex);
  
  return finalStr;
};
