function isApplicationPhaseClosed(applicationEndDate) {
  const today = new Date();
  let givenDate = applicationEndDate.toDate();
  if (today > givenDate) return true;
}

export default function TrackPhase(
  appEndPm,
  appEndSe,
  appEndAi,
  appEndIxd,
  appEndAc
) {
  if (isApplicationPhaseClosed(appEndPm)) {
    var pm = ['PM'];
  } else var pm = [];
  if (isApplicationPhaseClosed(appEndSe)) {
    var se = ['SE'];
  } else var se = [];
  if (isApplicationPhaseClosed(appEndAi)) {
    var ai = ['AI'];
  } else var ai = [];
  if (isApplicationPhaseClosed(appEndIxd)) {
    var ixd = ['IxD'];
  } else var ixd = [];
  if (isApplicationPhaseClosed(appEndAc)) {
    var ac = ['AC'];
  } else var ac = [];
  var all = pm.concat(se, ai, ixd, ac);

  switch (all.length) {
    case 0:
      return ' ';
    case 1:
      return '; ' + all[0] + ' track already closed';
    case 2:
      return '; ' + all[0] + ' and ' + all[1] + ' track already closed';
    case 3:
      return (
        '; ' +
        all[0] +
        ', ' +
        all[1] +
        ' and ' +
        all[2] +
        ' track already closed'
      );
    case 4:
      return 'allclosed';
  }
}
