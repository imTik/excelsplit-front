const SESSION = {
  get: function (key) {
    let val = sessionStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  },

  set: function (key, data) {
    (data || data === false) && sessionStorage.setItem(key, JSON.stringify(data));
  },

  del: function (key) {
    sessionStorage.removeItem(key);
  },
};

export default SESSION;
