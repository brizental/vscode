(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Glean"] = factory();
	else
		root["Glean"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = {
    /**
     * The key to store the last sequence number in storage.
     */
    SEQUENCE_NUMBER_STORAGE_KEY: "gleanSequenceNumber",

    /**
     * The key to store the time the last ping was sent in storage.
     */
    LAST_SENT_DATE_KEY: "gleanLastSentDate",

    /**
     * The key to store the client id.
     */
    CLIENT_ID_KEY: "gleanClientId",

    /**
     * The key to store the first run date.
     */
    FIRST_RUN_DATE_KEY: "gleanFirstRunDate",

    /**
     * The key to store the pending ping payloads.
     */
    PENDING_PINGS_STORAGE_KEY: "gleanPendingPings",

    /**
     * The key to store glean events on localStorage.
     */
    EVENT_STORAGE_KEY: "gleanEvents",

    /**
     * The key to store glean events on localStorage.
     */
    SESSION_START_KEY: "gleanSessionStart",

    /**
     * The key to store the previous `utm_campaign` seen on the URL.
     */
    UTM_CAMPAIGN_KEY: "gleanUtmCampaign",

    /**
     * The key to store the previous `utm_campaign` seen on the URL.
     */
    SESSION_ID_KEY: "gleanSessionId",

    /**
     * The maximum number of events to hold until it's time to flush.
     */
    MAX_EVENTS: 10,

    /**
     * The interval in which to batch and send events.
     */
    EVENTS_PING_INTERVAL: 60 * 1000, // 1min

    /**
     * The current version of this SDK,
     * this must by in sync with the version in the package.json.
     *
     * TODO: Find a better way to get this.
     */
    TELEMETRY_SDK_BUILD: "0.0.1",

    /**
     * The telemetry endpoint to send data to.
     */
    TELEMETRY_ENDPOINT: "https://cors-anywhere.herokuapp.com/https://incoming.telemetry.mozilla.org/",

    /**
     * The amount of time to wait before retrying on a recoverable error.
     */
    RECOVERABLE_UPLOAD_ERROR_TIMEOUT: 60 * 1000, // 1min

    /**
     * Max inactivity time a until a session is reset.
     */
    MAX_INACTIVITY_TIME: 30 * 60 * 1000, // 30min
}


/***/ }),

/***/ "./src/event_storage.js":
/*!******************************!*\
  !*** ./src/event_storage.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const { EVENT_STORAGE_KEY, MAX_EVENTS, EVENTS_PING_INTERVAL } = __webpack_require__(/*! ./constants */ "./src/constants.js");
const PingMaker = __webpack_require__(/*! ./ping_maker */ "./src/ping_maker/index.js");
const Session = __webpack_require__(/*! session */ "./src/session/browser.js");
const { setItem } = __webpack_require__(/*! storage */ "./src/storage/browser.js");
const { getItemWithDefault } = __webpack_require__(/*! ./utils */ "./src/utils.js");

/**
 * Represents the recorded data for a single event.
 */
class RecordedEvent {
    /**
     * Creates a new RecordedEvent.
     *
     * @param {Number} timestamp The timestamp of when the event was recorded. This allows to order events from a single process run.
     * @param {String} category The event's category. This is defined by users in the metrics file.
     * @param {String} name The event's name. This is defined by users in the metrics file.
     * @param {Object} extra A map of all extra data values. The set of allowed extra keys is defined by users in the metrics file.
     */
    constructor(timestamp, category, name, extra) {
        this.timestamp = timestamp;
        this.category = category;
        this.name = name;
        this.extra = extra;
    }

    /**
     * Serialize an event to JSON, adjusting its timestamp relative to a base timestamp.
     *
     * @param {Number} timestampOffset
     *
     * @returns {String} A JSON encoded string representing the serialized event.
     */
    serializeRelative(timestampOffset) {
        return {
            timestamp: this.timestamp - timestampOffset,
            category: this.category,
            name: this.name,
            extra: this.extra
        };
    }
}

class EventStorage {
    /**
     * Creates a new storage.
     *
     * @param {String} appId The app id where this instance of Glean is running
     */
    constructor(appId) {
        this._session = new Session(this._collectEvents);
        // Create an instance of the pingMaker to collect event when necessary.
        this._pingMaker = new PingMaker(appId);
        // Have a mirror of the events persisted in storage
        // so we don't need to make that trip everytime.
        this._events = this._getPersistedEvents();
        // The first event we get will be sent immediatelly,
        // other will be sent when MAX_EVENTS is reached or when we reach the end of an interval.
        this._atFirstEvent = true;

        const collectEvents = () => {
            this._collectEvents(this._session.id())
        };

        // If persisted events have reached limit, submit them
        if (this._events.length >= MAX_EVENTS) {
            collectEvents()
        }

        // The code inside this conditional will work for browser environments,
        // these can be:
        //  1. Electron apps
        //  2. Web extensions
        //  3. Web apps
        // The are not:
        //  1. CLI tools
        //  2. Servers
        //  3. QML apps
        if (typeof window !== "undefined") {
            // Set up an interval to send evenst periodically
            // TODO: Make sure using setInterval is not a terrible idea
            this._interval = setInterval(collectEvents, EVENTS_PING_INTERVAL);

            // If the page unloads we want to collect any events
            // in case the user never comes back to this page.
            //
            // TODO: even though this *usually* (focus on the usually, sometimes is doesn't)
            // succeeds in uploading the ping after the page in unloaded,
            // it never succeeds on deleting the ping that was uploaded (if it was successfully uploaded).
            // It also doesn't deal with upload errors.
            window.addEventListener("beforeunload", collectEvents);
        }
    }

    /**
     * Records a new event in storage.
     *
     * @param {Number} timestamp The timestamp of when the event was recorded. This allows to order events from a single process run.
     * @param {String} category The event's category. This is defined by users in the metrics file.
     * @param {String} name The event's name. This is defined by users in the metrics file.
     * @param {Object} extra A map of all extra data values. The set of allowed extra keys is defined by users in the metrics file.
     */
    record(timestamp, category, name, extra) {
        this._pushEvent(new RecordedEvent(timestamp, category, name, extra));

        if (this._atFirstEvent) {
            this._collectEvents(this._session.id());
            this._atFirstEvent = false;
        }

    }

    /**
     * Collects currently stored events for uploading and clears storage.
     */
    _collectEvents(sessionId) {
        if (this._events && this._events.length > 0) {
            // Do the actual collection
            this._pingMaker.collect(this._snapshot(), sessionId);
            // Clear stores
            this._events = []
            setItem(EVENT_STORAGE_KEY, JSON.stringify(this._events));
        } else {
            console.info("Attempted to collect a new ping but there are no events to collect at this moment. Bailing out.")
        }
    }

    /**
     * Gets a snapshot of the current events.
     *
     * @returns {Object} An representing all events stored, with timestamps relative to the first event.
     */
    _snapshot() {
        let snapshot = [];
        const firstTimestamp = this._events && this._events[0].timestamp;
        for (const event of this._events) {
            snapshot.push(event.serializeRelative(firstTimestamp));
        }
        return snapshot;
    }

    /**
     * Adds a new event to `this._events` and triggers ping collection
     * in case MAX_EVENTS has been reached.
     *
     * @param {RecordedEvent} event The event to persist
     */
    _pushEvent(event) {
        this._events.push(event);
        setItem(EVENT_STORAGE_KEY, JSON.stringify(this._events));

        if (this._events.length >= MAX_EVENTS) {
            this._collectEvents(this._session.id());
        }
    }

    /**
     * Get the persisted events from storage.
     *
     * @returns {String[]} The parsed array of events found in localStorage or an empty array.
     */
    _getPersistedEvents() {
        try {
            const persisted = getItemWithDefault(EVENT_STORAGE_KEY, JSON.stringify([]));
            const parsed = JSON.parse(persisted);
            return parsed.map(e => new RecordedEvent(e));
        } catch(e) {
            console.error(`Unable to parse Glean events from storage: ${e}`);
            setItem(EVENT_STORAGE_KEY, JSON.stringify([]));
            return [];
        }
    }
}

module.exports = EventStorage


/***/ }),

/***/ "./src/glean.js":
/*!**********************!*\
  !*** ./src/glean.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



const EventStorage = __webpack_require__(/*! ./event_storage */ "./src/event_storage.js");

class Glean {
  constructor(id, env) {
    console.info("Initializing Glean.js...");

    let appId = id;
    // Chrome does not define the `browser` object. Instead, it defines
    // the `chrome` object.
    var browser =
      (typeof browser !== "undefined") ? browser : (typeof chrome !== "undefined" ? chrome : null);

    if (appId) {
      env && console.log(`Running from ${env}`);
    } else if (browser) {
      console.log("Running from a webextension");
      appId = browser.runtime && browser.runtime.id;
    } else {
      console.log("Running from a web page");
      let gleanScript = document.getElementById("glean-js");
      appId = gleanScript && gleanScript.getAttribute('app-id');
    }

    if (!appId) {
      console.error("Unable to initialize Glean.JS: no app id provided.");
      return;
    }

    this._eventStorage = new EventStorage(appId);
  }
}

module.exports = Glean;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const Glean = __webpack_require__(/*! ./glean */ "./src/glean.js");
const EventMetricType = __webpack_require__(/*! ./private/EventMetricType */ "./src/private/EventMetricType.js");

module.exports = {
    Glean,
    _MetricTypes: {
        EventMetricType
    }
};


/***/ }),

/***/ "./src/ping_maker/index.js":
/*!*********************************!*\
  !*** ./src/ping_maker/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const {
    PENDING_PINGS_STORAGE_KEY,
    CLIENT_ID_KEY,
    FIRST_RUN_DATE_KEY,
    SEQUENCE_NUMBER_STORAGE_KEY,
    LAST_SENT_DATE_KEY,
    TELEMETRY_SDK_BUILD,
} = __webpack_require__(/*! ../constants */ "./src/constants.js");
const upload = __webpack_require__(/*! ../upload */ "./src/upload/index.js");
const { UUIDv4, transformItemWithDefault, getItemWithDefault } = __webpack_require__(/*! ../utils */ "./src/utils.js");
const { setItem } = __webpack_require__(/*! storage */ "./src/storage/browser.js");
const getPlatformInfo = __webpack_require__(/*! platform */ "./src/ping_maker/platform/browser.js");

/**
 * A helper class to collect and send pings for uploading.
 */
class PingMaker {
    constructor(appId) {
        this._appId = appId;

        // Upload outstanding pings from the last run
        this._uploadPersistedPings();

        // Preload all the info that doesn't change.
        this._clientId = this._getClientId();
        this._firstRunDate = this._getFirstRunDate();

        const { os, browser, deviceType, architecture, locale } = getPlatformInfo();
        this._os = os;
        this._browser = browser;
        this._deviceType = deviceType;
        this._architecture = architecture;
        this._locale = locale;


        const setMetricsThatRequireWindow = () => {
            this._referrer = document.referrer;
            this._pageTitle = document.title;
            this._pagePath = window.location.pathname;
        }
        typeof document !== "undefined" &&
            window.addEventListener('load', setMetricsThatRequireWindow);
    }

    /**
     * Builds the ping payload and submission url,
     * saves it to storage and triggers upload.
     *
     * @param {Object[]} events An array of event objects
     * @param {String} sessionId The id of the current session
     *
     * @returns {String} The ping payload (adding this here just until we got the uploader)
     */
    collect(events, sessionId) {
        const pingId = UUIDv4();
        console.info(`Collecting a new ping! ${pingId}`);
        const pingBody = {
            client_info: this._buildClientInfo(),
            ping_info: this._buildPingInfo(),
            events,
            metrics: this._buildMetricsSection(sessionId),
        };

        this._pushPing(pingId, pingBody);

        // Trigger upload for the newly collected ping
        upload(this._appId, pingId, pingBody);
    }

    /**
     * Adds a metrics section to the pings with the additional web app specific metrics.
     */
    _buildMetricsSection(sessionId) {
        let baseMetrics =  {
                string: {
                    "glean.platform.browser": this._browser,
                    "glean.platform.device_type": this._deviceType,
                }
        }

        if (sessionId) {
            baseMetrics["uuid"] = {
                "glean.session.session_id": sessionId
            }
        }

        if (typeof document !== "undefined") {
            baseMetrics["string"] = {
                "glean.platform.browser": this._browser,
                "glean.platform.device_type": this._deviceType,
                // These strings are all arbitrarily long
                // and the Glean schema only accepts strings up to 100 characters.
                "glean.page.referrer": this._referrer && this._referrer.slice(0, 100),
                "glean.page.title": this._pageTitle && this._pageTitle.slice(0, 100),
                "glean.page.path": this._pagePath && this._pagePath.slice(0, 100),
            }
        }

        return baseMetrics
    }

    /**
     * Uploads the persisted pings from storage and clears storage.
     */
    _uploadPersistedPings() {
        transformItemWithDefault(PENDING_PINGS_STORAGE_KEY, JSON.stringify({}), value => {
            let pings = JSON.parse(value);
            for (const pingId in pings) {
                upload(this._appId, pingId, pings[pingId]);
            }
            return JSON.stringify({});
        })
    }

    /**
     * Adds a new ping to storage.
     *
     * @param {String} pingId The id of the ping to persist
     * @param {Object} pingBody Te body of the ping to persist
     */
    _pushPing(pingId, pingBody) {
        transformItemWithDefault(PENDING_PINGS_STORAGE_KEY, JSON.stringify({}), value => {
            let pings = JSON.parse(value);
            pings[pingId] = pingBody;
            return JSON.stringify(pings);
        });
    }

    /**
     * Build the ping info section of the ping.
     */
    _buildPingInfo() {
        let { startTime, endTime } = this._getStartEndTimes();
        return {
            seq: this._getNextSequenceNumber(),
            experiments: {},
            start_time: startTime,
            end_time: endTime,
        }
    }

    /**
     * Builds the client info section of the ping.
     */
    _buildClientInfo() {
        let info = {
            app_build: "Unknown",
            app_display_version: "Unknown",
            architecture: "Unknown",
            client_id: this._clientId,
            first_run_date: this._firstRunDate,
            os: this._os,
            os_version: "Unknown",
            telemetry_sdk_build: TELEMETRY_SDK_BUILD,
            locale: this._locale
        };

        // Attempt to fetch the addon version, if we're a
        // webextension.
        var browser =
            (typeof browser !== "undefined") ? browser : (typeof chrome !== "undefined" ? chrome : {});
        if (typeof browser.runtime !== "undefined" && typeof browser.runtime.getManifest !== undefined) {
            info.app_display_version = browser.runtime.getManifest().version;
        }

        return info;
    }

    /**
     * Get the client id from storage or create a new one and store it.
     *
     * @returns {String} The stored client_id.
    */
    _getClientId() {
        return getItemWithDefault(CLIENT_ID_KEY, UUIDv4());
    }

    /**
     * Get the first run date from storage or create a new one and store it.
     *
     * @returns {String} The stored first run date.
    */
    _getFirstRunDate() {
        return getItemWithDefault(FIRST_RUN_DATE_KEY, (new Date()).toISOString());
    }

    /**
     * Calculates the next sequence number and updates storage with it.
     *
     * @returns {Number} The next sequence number.
    */
    _getNextSequenceNumber() {
        return transformItemWithDefault(SEQUENCE_NUMBER_STORAGE_KEY, 0, value => {
            const lastSeqNumber = parseInt(value);
            if (isNaN(lastSeqNumber)) throw "Stored sequence number is not a number!"
            return lastSeqNumber + 1
        });
    }

    /**
     * Get the last sent date from storage and gets the current date,
     * the former is the start time and the latter is the end time.
     *
     * @returns {Object} An object holding start and end times.
     */
    _getStartEndTimes() {
        let startTime = getItemWithDefault(LAST_SENT_DATE_KEY, (new Date()).toISOString());
        let endTime = (new Date()).toISOString();
        setItem(LAST_SENT_DATE_KEY, endTime);
        return {
            startTime,
            endTime,
        }
    }
}

module.exports = PingMaker


/***/ }),

/***/ "./src/ping_maker/platform/browser.js":
/*!********************************************!*\
  !*** ./src/ping_maker/platform/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = () => {
    function _guessOS(ua) {
        if (ua.indexOf("win") != -1) {
            return "Windows";
        } else if (ua.indexOf("mac") != -1) {
            return "MacOS";
        } else if (ua.indexOf("linux") != -1 ) {
            return "Linux";
        } else if (ua.indexOf("ios") != -1) {
            return "iOS";
        } else if (ua.indexOf("android") != -1) {
            return "Android";
        }

        return "Unknown";
    }

    function _guessBrowser(ua) {
        if (ua.indexOf("firefox") != -1) {
            return "Firefox";
        } else if (ua.indexOf("opera") != -1) {
            return "Opera";
        } else if (ua.indexOf("chrome") != -1 ) {
            return "Chrome";
        } else if (ua.indexOf("safari") != -1) {
            return "Safari";
        } else if (ua.indexOf("edge") != -1) {
            return "Edge";
        } else if (ua.indexOf("ie") != -1) {
            return "IE";
        }

        return "Unknown";
    }

    function _guessDeviceType(ua) {
        if (ua.indexOf("tablet") != -1) {
            return "Tablet";
        }

        if (ua.indexOf("android") != -1) {
            if (ua.indexOf("mobi") != -1) {
                return "Mobile";
            } else {
                // If it's Android and is not a phone, it's probably a tablet.
                return "Tablet";
            }
        }

        return "Desktop";
    }

    function _guessLocale() {
        try {
            return navigator.language;
        } catch(_) {
            return "und";
        }
    }

    // TODO: we should really have some "PlatformInfo" class that uses
    // UA when in a webpage and the WebExtentions APIs when in an addon.
    if (typeof navigator !== "undefined") {
        const ua = navigator.userAgent.toLowerCase();
        return {
            os: _guessOS(ua),
            browser: _guessBrowser(ua),
            deviceType: _guessDeviceType(ua),
            architecture: "Unknown",
            locale: _guessLocale(),
        }
    } else {
        return {
            os: "Unknown",
            browser: "Unknown",
            deviceType: "Unknown",
            architecture: "Unknown",
            locale:  _guessLocale(),
        }
    }
}


/***/ }),

/***/ "./src/private/EventMetricType.js":
/*!****************************************!*\
  !*** ./src/private/EventMetricType.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class EventMetricType {
  constructor(glean, category, name) {
    this.category = category;
    this.name = name;
    // The glean instance this metric belongs to.
    this.glean = glean;
  }

  record(extra) {
    this.glean._eventStorage.record(Date.now(), this.category, this.name, extra);
  }
}

module.exports = EventMetricType;


/***/ }),

/***/ "./src/session/browser.js":
/*!********************************!*\
  !*** ./src/session/browser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const {
    SESSION_START_KEY,
    SESSION_ID_KEY,
    UTM_CAMPAIGN_KEY,
    MAX_INACTIVITY_TIME,
} = __webpack_require__(/*! ../constants */ "./src/constants.js");
const { UUIDv4, throttle, getItemWithDefault } = __webpack_require__(/*! ../utils */ "./src/utils.js");
const { setItem, getItem } = __webpack_require__(/*! storage */ "./src/storage/browser.js");

/**
 * A session class to manage the current users section and act when a session is over.
 *
 * A session will when:
 *  1. After MAX_INACTIVITY_TIME of inactivity;
 *  2. On midnight (local time);
 *  3. If a new `utm_campaign` parameter is detected on the URL (this means the user was redirected to the current website by a different campaign);
 */
class Session {
    /**
     * Creates a new Session object.
     *
     * @param {Function} cb Callback to run everytime a session is over.
     */
    constructor(cb) {
        this._sessionId = this._getSessionId();
        this._startTime = this._getSessionStartTime();
        this._cb = cb;

        this._setTimeoutToResetAtMidnight();

        // Verify if we are over inactivity period and should reset the current session.
        const timeDelta = Date.now() - this._startTime;
        if (timeDelta > MAX_INACTIVITY_TIME) {
            this._startNewSession("init inactivity");
            return;
        }

        // Verify if we are coming from a different campaign.
        const currentCampaign = this._getCurrentUtmCampaign()
        if (currentCampaign && currentCampaign !== this._getLastUtmCampaign()) {
            this._startNewSession("campaign");
            return;
        }

        this._setTimeoutToResetOnInactivity(MAX_INACTIVITY_TIME - timeDelta);

        // Everytime we get user activity the inactivity timeout is reset.
        // I am considering activity, any click or key press on the page.
        document && document.addEventListener("click", () => this._setTimeoutToResetOnInactivity());
        document && document.addEventListener("keypress", () => this._setTimeoutToResetOnInactivity());
        window && window.addEventListener("scroll", throttle(() => this._setTimeoutToResetOnInactivity(), 1000));
    }

    /**
     * Returns the current session id.
     */
    id() {
        return this._sessionId;
    }

    /**
     * Set a timeout for ressetting this session at midnight,
     * when the timeout happens, another timeout is scheduled for midnight on the new day.
     */
    _setTimeoutToResetAtMidnight() {
        const milliseconsUntilMidnight = () => {
            const now = new Date();
            const midnightToday = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate() + 1,
                0, 0, 0
            );
            return midnightToday - now;
        }

        const startNewSession = () => {
            this._startNewSession("midnight");
            setTimeout(startNewSession, milliseconsUntilMidnight())
        };

        // Set a timeout to restart the session when we reach midnight.
        // This should never be cleared, we always want to re-start at midnight.
        setTimeout(startNewSession, milliseconsUntilMidnight());
    }

    /**
     * Set a timeout for reseting this session in MAX_INACTIVITY_TIME,
     * when the timeout happens, another timeout is immediatelly created.
     *
     * @param {Number} custom Optional custom backoff time
     *
     * @returns {Object} Returns the timeout set, we might want to cancel it.
     */
    _setTimeoutToResetOnInactivity(custom) {
        console.info("Reseting inactivity timeout!");

        const startNewSession = () => {
            this._startNewSession("inactivity");
            clearTimeout(this._resetOnInactivityTimeout);
            this._resetOnInactivityTimeout = setTimeout(startNewSession, MAX_INACTIVITY_TIME);
        }

        this._resetOnInactivityTimeout && clearTimeout(this._resetOnInactivityTimeout);
        this._resetOnInactivityTimeout = setTimeout(startNewSession, custom || MAX_INACTIVITY_TIME);
    }

    /**
     * Starts a new session.
     */
    _startNewSession(reason) {
        console.info(`Starting a new session due to ${reason}!`);
        this._cb(this._sessionId);

        let currentUtmCampaign = this._getCurrentUtmCampaign();
        if (currentUtmCampaign) {
            setItem(UTM_CAMPAIGN_KEY, currentUtmCampaign);
        }
        this._sessionId = this._resetSessionId();
        this._startTime = this._resetSessionStartTime();
        this._setTimeoutToResetOnInactivity();
    }

    /**
     * Gets the last sessions start time from storage,
     * in case nothing is stored will save current timestamp and store before returning.
     */
    _getSessionStartTime() {
        return getItemWithDefault(SESSION_START_KEY, Date.now());
    }

    /**
     * Resets the current session's start time to now and updates storage.
     *
     * @returns {Number} The new calculated start time.
     */
    _resetSessionStartTime() {
        const newStartTime = Date.now();
        setItem(SESSION_START_KEY, newStartTime);
        return newStartTime;
    }

    /**
     * Gets the last seen `utm_campaign` from storage.
     */
    _getLastUtmCampaign() {
        return getItem(UTM_CAMPAIGN_KEY);
    }

    /**
     * Gets the value of the `utm_campaign` query param from the URL.
     *
     * @returns The value of the `utm_campaign` param or `null` if not present.
     */
    _getCurrentUtmCampaign() {
        const currentUrl = new URL(window.location.href);
        return currentUrl.searchParams.get("utm_campaign");
    }

    /**
     * Gets the sessionId from storage.
     */
    _getSessionId() {
        return getItemWithDefault(SESSION_ID_KEY, UUIDv4());
    }

    /**
     * Resets the current session id in storage.
     */
    _resetSessionId() {
        const newSessionId = UUIDv4();
        setItem(SESSION_ID_KEY, newSessionId);
        return newSessionId;
    }
}

module.exports = Session


/***/ }),

/***/ "./src/storage/browser.js":
/*!********************************!*\
  !*** ./src/storage/browser.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Interface for the localStorage,
 * a key-value store that is available on browser environments.
 */

module.exports = {
    getItem(key) {
        return localStorage.getItem(key);
    },

    setItem(key, value) {
        return localStorage.setItem(key, value);
    }
}


/***/ }),

/***/ "./src/upload/adapters/xhr.js":
/*!************************************!*\
  !*** ./src/upload/adapters/xhr.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = (url, request) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.open('POST', url);
        // Pipeline will reject if this header is not present.
        req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        for (const header in request.headers) {
            req.setRequestHeader(header, request.headers[header]);
        }

        req.onerror = () => reject(req);
        req.onload = () => resolve(req);
        req.send(request.body);
    });
}


/***/ }),

/***/ "./src/upload/index.js":
/*!*****************************!*\
  !*** ./src/upload/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 const {
    TELEMETRY_ENDPOINT,
    PENDING_PINGS_STORAGE_KEY,
    RECOVERABLE_UPLOAD_ERROR_TIMEOUT
} = __webpack_require__(/*! ../constants */ "./src/constants.js");
const { transformItemWithDefault } = __webpack_require__(/*! ../utils */ "./src/utils.js");

// The issue with this approach is that webpack wil bundle all of these even if they are not used.
let _fetch;
//  `fetch` will be available is most modern browsers.
if (typeof fetch === "function") {
    _fetch = fetch;
// `XMLHttpRequest` will be available is older browsers and Qt/QML apps.
} else if (typeof XMLHttpRequest === "function") {
    _fetch = __webpack_require__(/*! ./adapters/xhr */ "./src/upload/adapters/xhr.js");
// `process` is available on the Node.js environment.
// TODO: make sure this check is reliable, it's copied from axios: https://github.com/axios/axios/blob/master/lib/defaults.js#L21
} else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    _fetch = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './adapters/http'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
} else {
    throw Error("Unable to start Glean.js in the current environment. No known uploaders.")
}

function upload(appId, pingId, payload) {
    const submissionUrl = `${TELEMETRY_ENDPOINT}submit/${appId}/events/1/${pingId}`;
    const body = JSON.stringify(payload);
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Content-Length": body.length,
            "Date": (new Date()).toISOString(),
            "X-Requested-With": "XMLHttpRequest",
            "X-Client-Type": "Glean.js",
            "X-Client-Version": "0.0.1",
            "X-Debug-ID": "gleanjs-vscode-demo"
        },
        body,
        keepalive: true
    };

    console.info(`Sending a new ping! ${pingId}\n`, JSON.stringify(request, null , 2));

    return _fetch(submissionUrl, request)
        .then(response => {
            switch (true) {
                // Success case
                case response.status >= 200 && response.status < 300:
                    console.info(`Ping submitted successfully ${pingId}`);
                    _deletePersistedPing(pingId);
                    break;
                // Unrecoverable error case
                case response.status >= 400 && response.status < 500:
                    console.error(`Unrecoverable error while submitting ping ${pingId}. Status code: ${response.status}`);
                    _deletePersistedPing(pingId);
                    break;
                // Recorevable error case
                default:
                    console.warn(`Recoverable error while submitting ping ${pingId}. Status: ${response.status}\n`, response);
                    typeof setTimeout !== "undefined" && setTimeout(() => upload(appId, pingId, payload), RECOVERABLE_UPLOAD_ERROR_TIMEOUT);
            }
        })
        .catch(error => {
            // These are always recoverable since they are errors while trying to make the request.
            console.warn(`Recoverable error while submitting ping ${pingId}. Unable to perform request: ${JSON.stringify(error)}`);
            typeof setTimeout !== "undefined" && setTimeout(() => upload(appId, pingId, payload), RECOVERABLE_UPLOAD_ERROR_TIMEOUT);
        });
}

function _deletePersistedPing(pingId) {
    console.info(`Deleting ping ${pingId} from storage`);
    transformItemWithDefault(PENDING_PINGS_STORAGE_KEY, JSON.stringify({}), value => {
        let pings = JSON.parse(value);
        delete pings[pingId];
        return JSON.stringify(pings);
    });
}

module.exports = upload;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const { getItem, setItem } = __webpack_require__(/*! storage */ "./src/storage/browser.js")

 /**
 * This is shamelessly copied from https://stackoverflow.com/a/2117523/261698
 * and https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
 *
 * @returns {String} A randomly generated UUIDv4.
 */
function UUIDv4() {
    if (typeof crypto !== "undefined") {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    } else {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

/**
 * This is samelessly copied from https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
 *
 * Throttles a function call.
 */
function throttle (func, limit) {
    let inThrottle;
    return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

/**
 * Returns the persisted value and if nothing is persisted, saves and returns the default.
 *
 * @param {String} key The key where the element is saved in storage.
 * @param {String} def The default value
 *
 * @returns The persisted value
 */
function getItemWithDefault(key, def) {
    const persisted = getItem(key);
    if (persisted) {
        return persisted;
    } else {
        setItem(key, def);
        return def;
    }
}

/**
 * Updates a given value in storage and sets it to a default in case transformation fails.
 *
 * @param {String} key The key where the element is saved in storage.
 * @param {String} def The default value
 * @param {Function} update The transformation function to apply to the persisted value.
 *
 * @returns The updated value that was persisted
 */
function transformItemWithDefault(key, def, transform) {
    const persisted = getItemWithDefault(key, def);
    try {
        let updated = transform(persisted);
        setItem(key, updated)
        return updated
    } catch(e) {
        console.warn(`Unable to update item ${key} in storage. Setting to default.`);
        setItem(key, def);
        return def;
    }
}

module.exports = {
    UUIDv4,
    throttle,
    getItemWithDefault,
    transformItemWithDefault,
}


/***/ })

/******/ });
});
