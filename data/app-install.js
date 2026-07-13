(function(){
function addHeadLinks(){
  if(!document.querySelector('link[rel="manifest"]')){const m=document.createElement('link');m.rel='manifest';m.href='manifest.webmanifest';document.head.appendChild(m)}
  if(!document.querySelector('link[rel="apple-touch-icon"]')){const i=document.createElement('link');i.rel='apple-touch-icon';i.href='assets/jru-academy-icon.svg';document.head.appendChild(i)}
  const theme=document.querySelector('meta[name="theme-color"]')||document.createElement('meta');theme.name='theme-color';theme.content='#0b2e63';if(!theme.parentNode)document.head.appendChild(theme)
}
function addInstallHelp(){
  if(document.getElementById('installHelp'))return;
  const box=document.createElement('div');box.id='installHelp';box.className='card';box.style.marginTop='16px';box.innerHTML=`<h2>📱 Put Jru Academy on Your Home Screen</h2><p><b>On iPhone or iPad:</b> Open this site in Safari. Tap the Share button. Scroll down and tap <b>Add to Home Screen</b>. Tap <b>Add</b>.</p><p><b>On Android or Chrome:</b> Open the browser menu and tap <b>Install app</b> or <b>Add to Home screen</b>.</p><p class="muted">Some lessons, Apple Music, GarageBand, videos, and the 3D studio still need internet.</p>`;
  const parent=document.getElementById('parentView');if(parent)parent.appendChild(box)
}
window.addEventListener('load',()=>{
  addHeadLinks();addInstallHelp();
  if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
});
})();