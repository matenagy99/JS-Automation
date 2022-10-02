/* 
https://www.hackerrank.com/challenges/detect-html-links/problem?isFullScreen=true
*/

function processData(input) {
    //Enter your code here
    let links = input.match(/href="[^\s]*"/g);
    let titles = input.match(/href.*>[^\n][a-zA-z0-9\s]+</g);
    const formattedLinks = links.map(link => {
        return link.slice(6, link.length - 1);
    });
    let extractedTitles =  titles.map(title => {
        return title.match(/>[^\n][a-zA-z0-9\s]+</g)[0];
    });
    const formattedTitles = extractedTitles.map(title => {
        return title.slice(1, title.length - 1);
    });
    for (let i = 0; i < formattedLinks.length; i++) {
        console.log(`${formattedLinks[i]},${formattedTitles[i]}`);
    }
} 

const input = `13
<div class="portal" role="navigation" id='p-navigation'>
<h3>Navigation</h3>
<div class="body">
<ul>
<li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">Main page</a></li>
<li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li>
<li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content  the best of Wikipedia">Featured content</a></li>
<li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li>
<li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [x]" accesskey="x">Random article</a></li>
<li id="n-sitesupport"><a href="//donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en" title="Support us">Donate to Wikipedia</a></li>
</ul>
</div>
</div>`;

processData(input);