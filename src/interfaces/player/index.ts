import { AttendanceInterface } from 'interfaces/attendance';
import { PlayerTrainingPlanInterface } from 'interfaces/player-training-plan';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  team_id: string;
  position?: string;
  date_of_birth?: Date;
  attendance?: AttendanceInterface[];
  player_training_plan?: PlayerTrainingPlanInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    attendance?: number;
    player_training_plan?: number;
  };
}
