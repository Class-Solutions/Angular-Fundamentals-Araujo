var fs = require('fs');

var path = 'app/data/event/';

module.exports.get = function (req, res) {
    var event = fs.readFileSync(path + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

module.exports.save = function (req, res) {
    var event = req.body;
    var files = getEventArray(res);
    var lastEvent = parseInt(files[files.length - 1].substr(0, 1)) + 1;
    fs.writeFileSync(path + lastEvent + '.json', JSON.stringify(event));
    res.send(event);
}

var getEventArray = function getEventArray(res) {
    var files = [];
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        console.log(e);
        res.send('[]');
        res.end();
    }
    return files;
};

module.exports.getAll = function (req, res) {
    var files = getEventArray(res);

    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
};
