import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';
// dssassadsdsdf
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import GoalsSchema from '../../api/goals/Goal.graphql';
import GoalsResolvers from '../../api/goals/resolvers';
import UserSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';

const typeDefs = [ResolutionsSchema, UserSchema, GoalsSchema];

const resolvers = merge(ResolutionsResolvers, UsersResolvers, GoalsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
