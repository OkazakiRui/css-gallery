import { useState, VFC } from 'react';
import Anticipation from './animations/Anticipation';
import Appeal from './animations/Appeal';
import Arc from './animations/Arc';
import Exaggeration from './animations/Exaggeration';
import Follow_through_and_overlapping_action from './animations/Follow_through_and_overlapping_action';
import Secondary_action from './animations/Secondary_action';
import Slow_in_and_slow_out from './animations/Slow_in_and_slow_out';
import Solid_drawing from './animations/Solid_drawing';
import Squash_and_stretch from './animations/Squash_and_stretch';
import Staging from './animations/Staging';
import Straight_ahead_action_and_pose_to_pose from './animations/Straight_ahead_action_and_pose_to_pose';
import Timing from './animations/Timing';
import s from './index.module.scss';

type Props = {
  click: (aniName: string) => void;
  title: string;
  text?: string;
};
const Button: VFC<Props> = ({ click, title, text }) => (
  <button type="button" onClick={() => click(title)}>
    {text || title}
  </button>
);
const titles = [
  'Squash_and_stretch',
  'Anticipation',
  'Staging',
  'Straight_ahead_action_and_pose_to_pose',
  'Follow_through_and_overlapping_action',
  'Slow_in_and_slow_out',
  'Arc',
  'Secondary_action',
  'Timing',
  'Exaggeration',
  'Solid_drawing',
  'Appeal',
];
const titlesJP = [
  '押し潰しと伸縮',
  '予備動作',
  '演出',
  '逐次描きと原画による設計',
  '継続する動きと後追いの動き',
  'スローインとスローアウト',
  '運動曲線',
  '副次アクション',
  'タイミング',
  '誇張',
  '立体感のある描画',
  'アピール力',
];

const Stage: VFC = () => {
  const [dis, setDis] = useState('default');
  const clickHandler = (aniName: string) => setDis(aniName);

  return (
    <>
      <div className={s.buttons}>
        {titles.map((title, i) => (
          <Button
            click={clickHandler}
            title={title}
            key={title}
            text={titlesJP[i]}
          />
        ))}
      </div>
      <div className={s.stage}>
        {dis === 'Squash_and_stretch' && <Squash_and_stretch />}
        {dis === 'Anticipation' && <Anticipation />}
        {dis === 'Staging' && <Staging />}
        {dis === 'Straight_ahead_action_and_pose_to_pose' && (
          <Straight_ahead_action_and_pose_to_pose />
        )}
        {dis === 'Follow_through_and_overlapping_action' && (
          <Follow_through_and_overlapping_action />
        )}
        {dis === 'Slow_in_and_slow_out' && <Slow_in_and_slow_out />}
        {dis === 'Arc' && <Arc />}
        {dis === 'Secondary_action' && <Secondary_action />}
        {dis === 'Timing' && <Timing />}
        {dis === 'Exaggeration' && <Exaggeration />}
        {dis === 'Solid_drawing' && <Solid_drawing />}
        {dis === 'Appeal' && <Appeal />}
      </div>
    </>
  );
};

export default Stage;
