import './style.css';

import {
    fillUsersSelect,
    fillPosts,
    fillFeaturedPostComments,
    clearPageData,
    fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
    .then((response) => response.json())
    .then(({ users }) => fillUsersSelect(users))


usersSelect.addEventListener('change', () => {
    clearPageData();
    fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
        .then((response) => response.json())
        .then(({posts}) => {
            fillPosts(posts)
            return fetch(`https://dummyjson.com/posts/${posts[0].id}/comments`)
        })
        .then((comments) => comments.json())
        .then(({comments}) => fillFeaturedPostComments(comments))
        .catch((e) => fillErrorMessage(e.message))
    // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});