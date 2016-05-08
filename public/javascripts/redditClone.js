var redditApp = angular.module('redditApp', ['ui.bootstrap', 'ngAnimate']);

redditApp.controller('formController', formController);

function formController ($scope) {
  $scope.navbarCollapsed = true;
  $scope.submitPost = {};
  $scope.submitPost.showForm = false;
  $scope.post = {};
  $scope.comment = {};
  $scope.view = {};
  $scope.view.sortOrder = '-votes';
  $scope.posts = [
    {
      title: 'Tycho Sunrise Set @ Burning Man 2015',
      author: 'Mike Duin',
      imageURL: 'https://scontent.xx.fbcdn.net/t31.0-8/12314508_10103704749763605_8951070381441620043_o.jpg',
      date: new Date(),
      votes: -1,
      commentTally: 0,
      comments: [],
      description: 'For the second year in a row, Tycho played a sunrise set atop the White Rhino at the "trash fence," the physical border separating the open playa of Black Rock City from the surrounding emptiness of the ancient lakebed.'
    },
    {
      title: 'Sunrise in Ko Phi Phi, Thailand',
      author: 'Mike Duin',
      imageURL: 'https://scontent.xx.fbcdn.net/t31.0-8/11402867_10103356834797985_4082741400077149535_o.jpg',
      date: new Date(),
      votes: 8,
      commentTally: 0,
      comments: [],
      description: 'Taken from a secluded set of bungalows on the northeast side of Ko Phi Phi Don.'
    },
    {
      title: 'Sunrise Over the Cliffs of Lagos',
      author: 'Mike Duin',
      imageURL: 'https://scontent.xx.fbcdn.net/t31.0-8/12068836_10103574179722015_7208961350135181846_o.jpg',
      date: new Date(),
      votes: 21,
      commentTally: 0,
      comments: [],
      description: "I like to wake up for the sunrise when I'm traveling; intent on doing so while in Portugal last September but having no particular destination in mind, I glanced at a map and saw there was a lighthouse a mile from our house. This is what was waiting for me at that lighthouse."
    },
    {
      title: 'Balloons Over Bagan at Sunrise',
      author: 'Mike Duin',
      imageURL: 'https://scontent.xx.fbcdn.net/t31.0-8/11698790_10103356866948555_610158598903813324_o.jpg',
      date: new Date(),
      votes: 14,
      commentTally: 0,
      comments: [],
      description: 'Bagan, Myanmar is home to the highest concentration of Hindu temples of anywhere in the world. At sunrise each morning a collection of hot air balloons take to the sky to offer their passengers a spectacular, unique view of the pagoda-dotted landscape.'
    },
    {
      title: 'Sunrise Over Angkor Wat',
      author: 'Mike Duin',
      imageURL: 'https://scontent.xx.fbcdn.net/t31.0-8/11224591_10103356842612325_8950196063786388716_o.jpg',
      date: new Date(),
      votes: 12,
      commentTally: 0,
      comments: [],
      description: 'Built by the Khmer Empire in the 12th century, Angkor Wat remains the largest religious monument in the world.'
    },
    {
      title: 'A Sydney Sunrise',
      author: 'Mike Duin',
      imageURL: 'https://scontent.xx.fbcdn.net/t31.0-8/11696625_10103356873979465_1872916176154158560_o.jpg',
      date: new Date(),
      votes: -5,
      commentTally: 0,
      comments: [],
      description: "An emerging sun and a distant rainstorm seen from Sydney's Bondi Beach."
    }
  ]

  $scope.formSubmit = function (post) {
    $scope.posts = $scope.posts || [];
    event.preventDefault();
    $scope.posts.push(post);
    $scope.post = {};
    $scope.createPost.$setPristine();
    $scope.submitPost.showForm = false;
    post.votes = 0;
    post.commentTally = 0;
    post.date = new Date();
    console.log(post.date);
    post.showComments = false;
    post.addComments = false;
    post.comments = [];
  }

  $scope.upvote = function (post) {
    post.votes += 1;
  };

  $scope.downvote = function (post) {
    post.votes -= 1;
  }

  $scope.addNewComment = function (post, comment) {
    post.comments.push(comment);
    post.addComments = false;
    post.commentTally +=1;
    $scope.comment = {};
    $scope.post.addComment.$setPristine();
  }

}
