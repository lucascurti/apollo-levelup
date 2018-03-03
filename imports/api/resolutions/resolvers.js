import Resolutions from './resolutions';
import Goals from '../goals/goals';

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      console.log(userId);
      return Resolutions.find({ userId }).fetch();
    },
  },
  Mutation: {
    createResolution(obj, { name }, { userId }) {
      const resolutionId = Resolutions.insert({
        name,
        userId,
      });
      return Resolutions.findOne(resolutionId);
    },
  },
  Resolution: {
    completed: resolution => {
      const goals = Goals.find({
        resolutionId: resolution._id,
      }).fetch();
      const completedGoals = goals.filter(goal => goal.completed);
      return goals.length && goals.length === completedGoals.length;
    },
    goals: resolution => Goals.find({ resolutionId: resolution._id }).fetch(),
  },
};
