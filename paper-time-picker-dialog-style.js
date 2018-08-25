import '../@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="paper-time-picker-dialog-style">
  <template>
    <style>
      /* Application of mixins to local .paper-time-picker-dialog elements */
      .paper-time-picker-dialog {
        @apply --paper-time-picker-dialog;
      }
      .paper-time-picker-dialog > paper-time-picker {
        --paper-calendar: {
          @apply --paper-time-picker-dialog-calendar;
        };
        @apply --paper-time-picker-dialog-picker;
      }
      .paper-time-picker-dialog > paper-time-picker:not([narrow]) {
        --paper-time-picker-heading: {
          @apply --paper-time-picker-dialog-heading;
        };
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
