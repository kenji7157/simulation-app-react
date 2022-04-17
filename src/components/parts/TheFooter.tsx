import React from 'react';
import {useTheFooter} from '../../hooks/useTheFooter'
import '../../scss/components/parts/TheFooter.scss'
import { isEnabledSendButton } from "../../util/enabledUtil";


const TheFooter: React.FC = () => {
  const {simulationData, sendSimulationData} = useTheFooter();

  return (
    <div className="p_footer">
    <button
      className={'p_footer_button' + (!isEnabledSendButton(simulationData) ? ' disabled' : '')}
      disabled={!isEnabledSendButton(simulationData)}
      onClick={sendSimulationData}
    >
      結果を見る
      <div className="p_footer_icon">
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    </button>
  </div>
  );
}

export default TheFooter;
