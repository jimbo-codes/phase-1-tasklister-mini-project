document.addEventListener("DOMContentLoaded", () => {
    let prior = document.createElement('select');
    let prior1 = document.createElement('option')
    let prior2 = document.createElement('option')
    let prior3 = document.createElement('option')
    prior1.text = 'high'
    prior2.text = 'medium';
    prior3.text = 'low';
    prior.options.add(prior1);
    prior.options.add(prior2);
    prior.options.add(prior3);
    prior.setAttribute('id', 'priority');
    let input = document.getElementById('new-task-description');
    let form = document.getElementById('create-task-form');
    form.appendChild(prior);
    let butt = document.getElementById('create-task-form').children[2]
    butt.remove();
    let butt2 = document.createElement('input')
    butt2.setAttribute('type','submit')
    butt2.textContent = 'Create'
    form.appendChild (document.createTextNode(" "));
    form.appendChild(butt2);
    // butt.insertBefore(prior);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        parent = document.getElementById('tasks');
        child1 = document.createElement('li')
        butt2 = document.createElement('button');
        child1.classList.add(prior.value);
        parent.appendChild(child1);
        child1.textContent = `${input.value} `;
        butt2.textContent = "X"
        butt2.classList.add("test");
        child1.appendChild(butt2);
        let buttons = document.getElementsByClassName('test');
        for(button of buttons){
            button.addEventListener('click',(e) => {
                e.target.parentElement.remove()
            })
        }
    form.reset();
    })
});
// add in the priority value dropdown - create the new element
// add in sorting functionality based on your priority
// ^ This should be accomplished by adding class of priority
// , and at the end of your click event re-ordering based on that.
// think - "reordering children nodes"
