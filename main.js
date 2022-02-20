var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  /* Do things after DOM has fully loaded */
  const container = document.querySelector('.box-wrapper');
  const { length, 0: first } = connect;
  
  console.log(first);
  
  //console.log(Object.keys(first));
  
  for(let key of Object.keys(first)) {
 	//console.log(key);
 	//console.log(first[key]);
 	const ins = first[key].filter((arr, index) => index < 7).map(dothis).join('');

  	container.innerHTML = ins;
  }
  
  function dothis(elem) {
  	const { transforms: {scale, xpos, ypos} } = elem;
  	console.log(elem.url);
  	const styleStr = `transform: scale(${scale}) translate(${xpos}px, ${ypos}px);`; console.log(styleStr);
  	
    const box = `<div class="box">
            <figure>
              <img src="${elem.img}" alt="Luscious pic of Chantel Riley" style="${styleStr}" />
            </figure>
            <div class="cat">
              Unforgettable
            </div>
            <h2>
              ${elem.title}<br>
            </h2>
            <div class="cta">
              <a class="btn" href="${elem.url}">Read more</a>
            </div>
          </div>`;

    return box;
  }
  // returns undefined
  //const { lead_performer: lead } = perfdata; console.log(lead);
  
  //const {feature_story: {theme}, guests } = perfdata[1];
  //const { length, 0: first, [length - 1]: last } = perfdata[1].guests;
  // Wes Bos alternative - const {theme} = perfdate[0].feature_story;

});
