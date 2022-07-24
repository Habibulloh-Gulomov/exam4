let elList = document.querySelector('.list')
let elTemplate = document.querySelector('.list__template').content
// elItem.querySelector('.list__item')

let elFragment = document.createDocumentFragment();

let renderTodo = (array ,node) =>{
  elList.innerHTML = ''
 array.forEach(element => {
 
  let newTemplate = elTemplate.cloneNode(true)
 
  newTemplate.querySelector('.list__item').dataset.todoId =  element.id
  newTemplate.querySelector('.list__id').textContent =  element.id
  newTemplate.querySelector('.list__user').textContent =  element.name + ','
  newTemplate.querySelector('.list__username').textContent =element.username
  newTemplate.querySelector('.list__email').textContent = element.email;

  
  newTemplate.querySelector('.location__city').textContent =  element.address.city
  newTemplate.querySelector('.location__street').textContent =  element.address.street + ' street,'
  newTemplate.querySelector('.location__home').textContent =  element.address.suite
  newTemplate.querySelector('.location__code').textContent = 'Zipcode is '+ element.address.zipcode

  newTemplate.querySelector('.list__phone').textContent = element.phone
  newTemplate.querySelector('.list__website').textContent = element.website

  newTemplate.querySelector('.company__name').textContent =  element.company.name
  newTemplate.querySelector('.company__catch').textContent = element.company.catchPhrase
  newTemplate.querySelector('.company__bs').textContent = "BS: "+ element.company.bs


  newTemplate.querySelector('.list__email').setAttribute('href' , `mailto:${element.email}`);
  newTemplate.querySelector('.list__website').setAttribute('href' , 'element.website');
  newTemplate.querySelector('.list__phone').setAttribute('href' , `tel:${element.phone}`)
  newTemplate.querySelector('.location__map').setAttribute('href' , `https://www.google.com/maps/@${element.address.geo.lat},${element.address.geo.lng}`)

  elFragment.appendChild(newTemplate)

 });
 node.appendChild(elFragment)
}

  async function Users() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    renderTodo(data , elList)
  }
  Users()

  let elItemPost = document.querySelector('.template__item')
  let elListPost = document.querySelector('.list__bottom')
  let elTemplatePost = document.querySelector('.list__bottom__template').content
  let elFragmentPost = document.createDocumentFragment();

  let renderPost = (array ,node) =>{
    elListPost.innerHTML = ''
    array.filter(element => {
    let newTemplatePost = elTemplatePost.cloneNode(true)
    newTemplatePost.querySelector('.template__item').dataset.todoId =  element.postId
  
      newTemplatePost.querySelector('.template__title').textContent = element.title
      newTemplatePost.querySelector('.template__text').textContent = element.body;
      elFragmentPost.appendChild(newTemplatePost)
    });
    node.appendChild(elFragmentPost)
   }

  elList.addEventListener('click' , function(evt){
    if(evt.target.matches('.list__item')){
    let newID = evt.target.dataset.todoId
    console.log(newID)

    }
    async function userText() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await response.json();
      renderPost(data , elListPost)
    }
    userText()
  })



  let elItemLast = document.querySelector('.last__item')
  let elListLast = document.querySelector('.list__middle')
  let elTemplateLast = document.querySelector('.list__middle__template').content
  let elFragmentLast = document.createDocumentFragment();

  let renderLast = (array ,node) =>{
    
    array.forEach(element => {
      
    let newTemplateLast = elTemplateLast.cloneNode(true)
   
      newTemplateLast.querySelector('.last__title').textContent = element.name;
      newTemplateLast.querySelector('.last__mail').textContent = element.email;
      newTemplateLast.querySelector('.last__text').textContent = element.body;

      elFragmentLast.appendChild(newTemplateLast)
   
    });
    node.appendChild(elFragmentLast)
   }

  elListPost.addEventListener('click' , function(evt){
    if(evt.target.matches('.template__item')){
      let newID = evt.target.dataset.todoId
      console.log(newID)
  
      }
    async function userComment() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      const data = await response.json();
      renderLast(data , elListLast)
    }
    userComment()
  })
  


