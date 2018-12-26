import { add } from 'ramda';
import { compose, lifecycle, withState, withHandlers } from 'recompose';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

// HACK: related to async react state
let outText = '';
let loopNum = 0;

export const withTickyText = compose(
  withState('outputText', 'setOutputText', ''),
  withHandlers({
    tickInputTextWithDelay: props => letter => {
      const { period, setOutputText } = props;
      const delta = add(loopNum, period);
      loopNum = add(loopNum, period);
      setTimeout(() => {
        outText = `${outText}${letter}`;
        setOutputText(`${outText}`);
      }, delta);
    },
  }),
  withHandlers({
    tickInputText: props => () => {
      const { inputText } = props;
      for (const letter of inputText) { // eslint-disable-line
        props.tickInputTextWithDelay(letter);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.tickInputText();
    },
    componentWillUnmount() {
      outText = '';
      loopNum = 0;
      this.props.setOutputText(outText);
    },
  }),
);
