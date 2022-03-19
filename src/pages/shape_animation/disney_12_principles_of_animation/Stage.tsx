import { useState, VFC } from 'react';
import { text } from 'stream/consumers';
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
  const [displayAnimation, setDisplayAnimation] = useState('default');
  const clickHandler = (aniName: string) => setDisplayAnimation(aniName);

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
      <div className={s.stage}>{displayAnimation}</div>
    </>
  );
};

export default Stage;
