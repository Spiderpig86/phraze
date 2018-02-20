/**
 * File for the main application
 */

let outlineButton = document.querySelectorAll('.btn-outline-dark');
var totalkeywords = 3;
outlineButton.forEach((e, i) => e.addEventListener('click', activate));

function activate() {
    let self = this, activatedClass = 'btn-activated';
    
    if(!classie.has(this, activatedClass)) {
        classie.add( this, activatedClass );
        setTimeout(() => classie.remove(self, activatedClass), 500);
    }
}

/**
 * Highlight pass phrase after clicking generate.
 */
document.getElementById('generateButton').addEventListener('click', () => {
    var url = "/generate";

    $.ajax({
        type: "POST",
        url: url,
        data: { 
            numwords: totalkeywords,
            seed: document.getElementById('phraseInput').value
        },
        success: function(phrase) {
            // Set phrase to the inner text of label
            document.getElementById('passPhrase').innerText = phrase;
        },
        error: function(err) {
            alert(err.responseText);
        }
    });

    // Select the generated pass phrase
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById('passPhrase'));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById('passPhrase'));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
});

document.getElementById('randomButton').addEventListener('click', () => {
    var url = "/rand";

    $.ajax({
        type: "GET",
        url: url,
        success: function(phrase) {
            // Set phrase to the inner text of label
            document.getElementById('phraseInput').value = phrase;
        },
        error: function(err) {
            alert(err.responseText);
        }
    });
});

document.getElementById('phraseLenIn').addEventListener('input', function() {
    if (this.value !== null && !isNaN(this.value)) {
        if (parseInt(this.value) < 3) this.value = 3;
        if (parseInt(this.value) > 20) this.value = 20;
        document.getElementById('phraseLenBtn').innerText = 'Number of Words: ' + this.value;
        totalkeywords = this.value; // Update global value for number of words to generate
    }
});