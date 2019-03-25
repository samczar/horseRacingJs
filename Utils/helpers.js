export function time2TimeAgo(ts) {
  // This function computes the delta between the
  // provided timestamp and the current time, then test
  // the delta for predefined ranges.

  var d = new Date(); // Gets the current time
  var nowTs = Math.floor(d.getTime() / 1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
  var seconds = nowTs - ts;

  // more that two days
  if (seconds > 360 * 24 * 3600) {
    return "at least a year";
  }
  // more that two days
  if (seconds > 180 * 24 * 3600) {
    return "months ago";
  }
  // more that two days
  if (seconds > 60 * 24 * 3600) {
    return "months ago";
  }

  // more that two days
  if (seconds > 2 * 24 * 3600) {
    return "a few days ago";
  }
  // a day
  if (seconds > 24 * 3600) {
    return "yesterday";
  }

  if (seconds > 3600) {
    return "a few hours ago";
  }
  if (seconds > 1800) {
    return "Half an hour ago";
  }
  if (seconds > 60) {
    return Math.floor(seconds / 60) + " minutes ago";
  }
  if (seconds < 1 * 12 * 3600) {
    return "12 hours from now";
  }
  if (seconds < 24 * 3600) {
    return "1 day from now";
  }
  //   if (seconds < 60) {
  //     return Math.floor(seconds / 60 / 60) + " minutes from now";
  //   }
  // more that two days
  if (seconds < 2 * 24 * 3600) {
    return "2 days from now";
  }
}

/**
 * This function adds one to its input.
 * @param {number} timestamp any number
 * @returns {string} that date.
 */

export function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
    dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
    ampm = "AM",
    time;

  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh == 0) {
    h = 12;
  }

  // ie: 2013-02-18, 8:35 AM
  time = dd + "-" + mm + "-" + yyyy + ", " + h + ":" + min + " " + ampm;

  return time;
}

//Add commas to the purse amount
export function numberWithCommas(x) {
  let value = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return value;
}

export function currentTime(x) {
  let cdate = new Date.now();
  console.log("cdate", cdate);
  return x > cdate;
}

export function dataHolder(filter, arr) {
  arr
    .filter(el => {
      if (filter.length < 1) return false;
      return filter.includes(el.race_type.toUpperCase());
    })
    .sort((a, b) => {
      var raceA = a.race_type.toUpperCase(); // ignore upper and lowercase
      var raceB = b.race_type.toUpperCase(); // ignore upper and lowercase

      if (raceA < raceB) {
        return -1;
      }
      if (raceA > raceB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
    .sort((a, b) => {
      var date1 = a.post_time;
      var date2 = b.post_time;

      if (date1 < date2) {
        return -1;
      }
      if (date2 > date1) {
        return 1;
      }

      // names must be equal
      return 0;
    })
    .sort((a, b) => {
      var purse1 = a.purse.amount;
      var purse2 = a.purse.amount;

      if (purse1 < purse2) {
        return -1;
      }
      if (purse2 > purse1) {
        return 1;
      }
    });
}
