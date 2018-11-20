const initState = {
  posts: [
    { id: '1', title: 'Big elephant outside of the zoo', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis convallis ultrices. Vestibulum venenatis pharetra erat euismod lacinia. Vivamus accumsan at libero non volutpat. Quisque quis tellus vitae enim dignissim venenatis. Nam laoreet urna ut ligula dapibus vulputate. Ut lobortis leo vitae nisl commodo, varius vestibulum odio auctor. Sed placerat dui massa. Maecenas finibus odio ipsum. Ut finibus, nisi eu eleifend molestie, nisi turpis tempus justo, et tempor mi arcu ac velit. Suspendisse hendrerit posuere elit, at accumsan lorem porta et. Duis in purus non nibh ultrices facilisis. " },
    { id: '2', title: 'Accident on the highway', content: 'Proin commodo tincidunt arcu ac facilisis. Nunc finibus mauris a elit varius mollis. In tincidunt blandit vulputate. Donec fermentum risus lectus, ut tempus nisl accumsan non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum auctor est quam, quis elementum ex volutpat nec. Praesent dignissim vitae ex ornare luctus. ' },
    { id: '3', title: 'Do you like my dog?', content: 'Morbi placerat orci a felis condimentum, non venenatis lorem gravida. Sed ultrices aliquam volutpat. Aenean lectus lectus, pulvinar a aliquet at, ornare at nunc. Mauris vulputate rutrum lacinia. Sed vehicula urna diam, id ultricies erat egestas vitae. Ut hendrerit augue mauris, at laoreet ipsum cursus non. Morbi ut felis eleifend, sagittis mauris vel, ultrices erat. Sed vitae neque sit amet lorem lobortis gravida. Vivamus id est a nunc tincidunt semper quis ac orci. Fusce nec libero iaculis dui interdum commodo. Ut tellus arcu, rutrum in tincidunt id, tristique vel eros. ' }
  ]
}

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("CREATE_POST");
      break;
    case "CREATE_POST_ERROR":
      console.warn(action.error);
      break;
    default:
      break;
  }
  return state;
}

export default postsReducer;