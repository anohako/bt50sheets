// ==UserScript==
// @name         BT50 Show Billsheets
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On the Bill Detail page, show a list of Bill Sheets the bill is in.
// @author       Corinne Green
// @match        https://www.billtrack50.com/billdetail/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @grant        GM.getValue
// @icon         none
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function clickOnButton (jNode) {
         var clickEvent = document.createEvent ('MouseEvents');
         clickEvent.initEvent ('click', true, true);
         jNode[0].dispatchEvent (clickEvent);
     };
        function clickOnX (jNode) {
         var clickEvent = document.createEvent ('MouseEvents');
         clickEvent.initEvent ('click', true, true);
         jNode[0].dispatchEvent (clickEvent);
     };

    function waitForAddedNode(params) {
    new MutationObserver(function(mutations) {
        var el = document.getElementById(params.id);
        if (el) {
            this.disconnect();
            params.done(el);
        }
    }).observe(params.parent || document, {
        subtree: !!params.recursive || !params.parent,
        childList: true,
    });
    }

    waitForKeyElements (":button", clickOnButton, true);

    waitForAddedNode({
    id: "track-modal",
    parent: document.querySelector(".container"),
    recursive: false,
    done: function(el) {
        var billsheets = document.getElementsByClassName("track-name");
        alert(billsheets);
        var hidden = document.querySelectorAll("track-date");
        var placement=(document.querySelector("div.card-body div.row div.col div.row div.col div:not(.class)"));
        placement.textContent += hidden.textContent[1];
        //alert(billsheets.length);
//                 for (let i = 1; i <= billsheets.length; i++) {
//               if (hidden.textContent[i] != "Hidden" && hidden.textContent[i].length != 0) {
//                   placement.textContent += ("LOOOOOOOOL"); //+= ("\ ", billsheets.textContent[i]);
//                }
//           }
    }
});

////////////////////////////////////////////////////////////////////////
//      var billsheets = document.querySelectorAll("ul.combine-content.list-group li.list-group-item div.row div.col.track-name");
//      var hidden = document.querySelectorAll("ul.combine-content.list-group li.list-group-item div.row div.col-auto div.ui-w-90.d-inlineblock.track-date");
//      var div = document.createTextNode("In the following billsheets\:\ ");
//      var placement; //=(document.querySelector("div.card-body div.row div.col div.row div.col div:not(.class)"));
// //     div.innerHTML = "<b>In the following billsheets:</b> ";
//      var a;
//      var b;
//      var c;
//      var d;
//     function Orange (jNode) {

//         //        placement=(document.querySelector("div.card-body div.row div.col div.row div.col div:not(.class)"));
//     };

// //     function PlaceAfterLoad (jNode) {
// //          WaitForKeyElements ("ul.combine-content.list-group li.list-group-item div.row div.col.track-name", Orange, true);
// //          return false;
// //      };    
//     function ReadAndPrintSheets (billsheetsf, hiddenf, placementf, divf) {
//         alert(billsheetsf.length);
//         for (let i = 0; i <= billsheetsf.length; i++) {
//              if (hiddenf.textContent[i] != "Hidden" && hiddenf.textContent[i].length != 0) {
//                  placementf.div.innerHTML += ("\ ", billsheetsf.textContent[i]);
//               }
//          }
//      };
//      function First () {
//          waitForKeyElements ("div.card-body div.row div.col div.row div.col div:not(.class)", Orange, true);
//          waitForKeyElements (":button", clickOnButton, true);
//          //         WaitForKeyElements ("ul.combine-content.list-group li.list-group-item div.row div.col.track-name", Orange, true);
//          //placement=(document.querySelector("body > div.layout-wrapper.layout-2 > div.layout-inner > div > div > main > div > div:nth-child(1) > div:nth-child(3) > div > div.col > div > div.col > div"));
//          //         placement.appendChild(div);
//          // document.querySelector("body > div.layout-wrapper.layout-2 > div.layout-inner > div > div > main > div > div:nth-child(1) > div:nth-child(3) > div > div.col > div > div.col > div").textContent += "<p></p><b>In the following billsheets\:\ ";
//      };


//          // LET'S GO
//          //      var sequence = new Promise(function (resolve) {
//          //           First;
//          //           resolve;
//          //      })
//          //      .then(() => {
//          //          ReadAndPrintSheets (billsheets, hidden, placement, div);
//          //      })

//       First();
//       ReadAndPrintSheets (billsheets, hidden, placement, div);
//////////////////////////////////////////////////////////////////
// var target = document.querySelector("body");

// var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//         console.log(mutation.type);
//     });
// });

// var config = { attributes: true, childList: true, characterData: true, attributes: true, subtree: true };

// observer.observe(target, config);    
//}
//     function addObserverIfDesiredNodeAvailable() {
//     var composeBox = document.querySelector(".track-modal");
//     if(!composeBox) {
//         //The node we need does not exist yet.
//         //Wait 500ms and try again
//         window.setTimeout(addObserverIfDesiredNodeAvailable,500);
//         return;
//     }
//     var config = {childList: true};
//         var composeObserver = new MutationObserver(callback);
//     composeObserver.observe(composeBox,config);
// }
// addObserverIfDesiredNodeAvailable();



//      const observer = new MutationObserver(callback);

//      observer.observe(targetNode, config);

//      observer.disconnect();
     //alert('Hi');



//    document.querySelectorAll('ul."combine-content list-group" > li.list-group-item').forEach(list-group-item => {
//  if ('li.list-group-item > div.row > div.col-auto > div."ui-w-90 d-inline-block track-date".textContent.includes(*)) {
//    wordbreak.style.display = 'none';
//  }
//});
})();
