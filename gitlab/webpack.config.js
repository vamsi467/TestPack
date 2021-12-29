const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const axios = require('axios');

const scriptsPath = path.resolve(__dirname, './');
const srcBasePath = `${scriptsPath}/src`;
const destPath = `${scriptsPath}/public`;

const DATA_URL =
  'https://gl-technical-interviews.gitlab.io/frontend-technical-interviews/template/fe-technical-assessment-spec/team-members.json';

let getTeamData = async () => {
  console.log('Loading team data');
  const { data } = await axios.get(DATA_URL);

  getTeamData = () => data;

  console.log(`Successfully loaded and cached ${data.length} team members.`);

  return data;
};

getTeamData();

module.exports = {
  mode: 'development',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    hot: true,
    port: 8128,
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      /**
       * This is an "API endpoint". The file needs a long time to load for some
       * people, so we just cache it here for the purpose of this exercise
       */
      devServer.app.get('/api/team_data', async (req, res) => res.json(await getTeamData()));
    },
  },
  entry: {
    application: `${srcBasePath}/application.js`,
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.vuex?$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s*)[a|c]ss$/i,
        use: [
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules'],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    path: destPath,
    filename: '[name][contenthash].js',
  },
  plugins: [
    new HtmlPlugin({
      template: `${srcBasePath}/index.html`,
      favicon: `${srcBasePath}/favicon.ico`,
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['*', '.ts', '.js', '.vue', '.json', '.mjs'],
  },
};
