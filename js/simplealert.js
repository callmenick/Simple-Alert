/**
 * Simple Alert
 *
 * This little function allows us to display alerts to the user. The alerts
 * append to a wrapper of choice, and takes on two other variables.
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Call Me Nick
 * http://callmenick.com
 */

;( function( window ) {

  'use strict';

  /**
   * Extend obj function
   *
   * This is an object extender function. It allows us to extend an object
   * by passing in additional variables and overwriting the defaults.
   */
  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * SimpleAlert
   *
   * @param {Object} options - The options object
   */
  function SimpleAlert( options ) {
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
  }

  /**
   * SimpleAlert options Object
   *
   * @type {HTMLElement} wrapper - The wrapper to append alerts to.
   * @param {string} type - The type of alert.
   * @param {string} message - The alert message.
   */
  SimpleAlert.prototype.options = {
    wrapper : document.body,
    type : "default",
    message : "Default message."
  }

  /**
   * SimpleAlert _init
   *
   * This is the initializer function. It builds the HTML and gets the alert
   * ready for showing.
   */
  SimpleAlert.prototype._init = function() {
    // create element
    this.sa = document.createElement('div');
    this.sa.className = 'simple-alert ' + this.options.type;

    // create html
    var strinner = '';
    strinner += '<span class="simple-alert__content">';
      strinner += this.options.message;
    strinner += '</span>';
    strinner += '<a href="#" class="simple-alert__dismiss">close</a>';
    this.sa.innerHTML = strinner;

    // run the events
    this._events();
  };

  /**
   * SimpleAlert _events
   *
   * This is our events function, and its sole purpose is to listen for
   * any events inside our Simple Alert.
   */
  SimpleAlert.prototype._events = function() {
    // cache vars
    var btn_dismiss = this.sa.querySelector('.simple-alert__dismiss'),
        self = this;

    // listen for dismiss
    btn_dismiss.addEventListener( "click", function(e) {
      e.preventDefault();
      self.dismiss();
    });
  }

  /**
   * SimpleAlert show
   *
   * This function simply shows our Simple Alert by appending it
   * to the wrapper in question.
   */
  SimpleAlert.prototype.show = function() {
    this.options.wrapper.appendChild(this.sa);
  }

  /**
   * SimpleAlert dismiss
   *
   * This function simply hides our Simple Alert by removing it
   * from the wrapper in question.
   */
  SimpleAlert.prototype.dismiss = function() {
    this.options.wrapper.removeChild(this.sa);
  };

  /**
   * Add to global namespace
   */
  window.SimpleAlert = SimpleAlert;

})( window );