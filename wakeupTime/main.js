$(document).on('ready', function() {

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var labels = $('<ul class="labels">' +
			 '<li>AM/PM</li>' + 
			 '<li>AUTO</li>' +
		'</ul>');
	var clockText = $('<div class="clock-text">.12:17</div>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var amPmIndicator = $('<div class="am-pm-indicator"></div>');
	var bottomAmLabel = $('<div class="bottom-AM-Label">10 20 30 40 50 60</div>');
	var bottomPmLabel = $('<div class="bottom-PM-Label"></div>');
	
	$('.container').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(labels);

	innerShell.append(clockScreen);
	clockScreen.append(clockText);

  
});

