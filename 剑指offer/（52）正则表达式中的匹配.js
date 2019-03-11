// 第一种
function match(s, pattern) {
  const reg = new RegExp(`^${pattern}$`);
  return reg.test(s);
}

// 第二种
function matchCore(s, istr, pattern, ipattern) {
  if (istr === s.length && ipattern === pattern.length) {
    return true;
  }

  if (istr !== s.length && ipattern === pattern.length) {
    return false;
  }
  if (pattern[ipattern + 1] === '*') {
    if (pattern[ipattern] === '.' && istr !== s.length || pattern[ipattern] === s[istr]) {
      return (
        matchCore(s, istr + 1, pattern, ipattern + 2) ||
        matchCore(s, istr + 1, pattern, ipattern) ||
        matchCore(s, istr, pattern, ipattern + 2)
      );
    }
    return matchCore(s, istr, pattern, ipattern + 2);
  }

  if (s[istr] === pattern[ipattern] || pattern[ipattern] === '.' && istr !== s.length) {
    return matchCore(s, istr + 1, pattern, ipattern + 1);
  }
  return false;
}

function match2(s, pattern) {
  if (s === null || pattern === null) {
    return false;
  }
  return matchCore(s, 0, pattern, 0);
}
