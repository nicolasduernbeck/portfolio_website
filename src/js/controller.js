import forwardTypeView from './View/forwardTypeView';
import backwardTypeView from './View/backwardTypeView';

(async () => {
  try {
    forwardTypeView.startTypeAnimation(200);
    backwardTypeView.startTypeAnimation(171.42);
  } catch (err) {
    console.log(err);
  }
})();
