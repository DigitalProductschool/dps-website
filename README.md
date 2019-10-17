# Website Digital Product School

# Frontend

## Prerequesites

### Node and npm

`Install node and npm`

### Gatsby

`npm install -g gatsby-cli`

## Context

The gatsby frontend resides currently in the root directory. The intention is to move it to a `frontend/` folder.

## Setting Up

1. Run `npm install` in the root dir

## Development

1. Run `npm run start`
2. Any environemnt variables go into `.env.development` for local development and into `cloudbuild-prod|staging.yaml` for prod / staging.

## Testing

???

## Deployment

Any push to staging branch is being deployed via `cloudbuild-staging.yaml` and any push to master branch is being deplopyed via `cloudbuild-prod.yaml`.

# Services / Cloud Functions

## Context

This is work in progress and we're still figuring out what's the best way to develop cloud functions. You can find them under `funtions/`.

## Setting up

Navigate to `functions/` and run `npm run install`.

## Development

1. Login in gcloud cli
2. Setup your local runtime. Under `functions/` run:

`firebase functions:config:get --project dps-website-staging-0 > .runtimeconfig.json`

This would provide all the configs from google cloud runtime on your local PC so you can run functions locally. Please never commit `.runtimeconfig.json` to git, because this is sensitive information.

1. Authentication: run both `gcloud auth login` followed by `gcloud auth application-default login` so that the local environment has access of default credentials. See [ADC credentials discovery](https://cloud.google.com/docs/authentication/production).

2. Running `npm run serve` will start the functions locally. However, those functions connect to `firestore` on the cloud. The other option would be to start `firestore` emulator as well, but for now we like the cloud one, because it provides nice UI and is less hassle to setup. Those functions would connect against our staging `cloud storage` as well.

3. In order to authenticate against `firestore` and `cloud storage`, you need to go to the dps-website-staging project and download the key for `dps-website-staging-0@appspot.gserviceaccount.com` and put it under `functions/` with name `dps-website-staging.firebase.key.json`.

4. Now you can experiment against the functions that run locally and are accessible via localhost, but they access our staging database & storage.

5. For faster iterations, we recommend developing via tests if possible

## OAuth Credentials
Functions such as sending confirmation mails and storing data into Google sheets require OAuth credentials. The following steps guide you to get the required tokens.

1. Login into `https://console.developers.google.com/` and choose the working project.

2. Then go to the credentials tab, click on `create credentials` and choose `OAuth client id`. You would be redirected to `Create OAuth client ID` screen.

3. Choose `Application type` as `Web application` and then specify the name of your application and for `Authorised redirect URIs` specify `https://developers.google.com/oauthplayground` and press enter (very important). We use oauthplayground to access refresh token. Click on `Save` then `OAuth client` screen would pop up containing `client ID` and `client secret`. Save them as you would require these later to create refresh token.

4. Now visit `https://developers.google.com/oauthplayground/`. Click on the settings tab located in far right and then `OAuth 2.0 configuration` screen would pop up. Choose `Use your own OAuth credentials` option and then specify `OAuth Client ID` and `OAuth Client secret` that you had saved before. 

5. Now in the far left, select the scope for the APIs you would like to access and click on authorise APIs. You would be then asked to choose your gmail account and then allow the application to access that account. 

6. You would be redirected to the Oauth playground screen and under step 2 click on `Exchange authorization code for tokens` to get your refresh token. Save this refresh token as you would need it in firebase functions to access the APIs. This refresh token helps you to get the access token. 


## Tests

### Authentication

While in development we use [ADC credentials discovery](https://cloud.google.com/docs/authentication/production) via credential: admin.credential.applicationDefault(), I haven't figured out how to use default credentials in tests as well, so we use a file instead.
In order to authenticate against `firestore` and `cloud storage`, you need to go to the dps-website-staging project and download the key for `dps-website-staging-0@appspot.gserviceaccount.com` and put it under `functions/` with name `dps-website-staging.firebase.key.json`.

### Unit Tests

We have unit tests under `__test__/`, you could run them via `npm run test` or `npm run test:watch`. Those should test against functionality that's not related to database or storage - mostly pure functions.

### Integration tests

You could find integration tests under `__test__/` and run them via `npm run integrationtest` or `npm run integrationtest:watch`. Those tests would be executed against the `database` and `storage` staging environment.

### Thoughts

Unfortunately, some things such as file uploads are very difficult to test, so we recommend weighting out the benefits of writing tests there and thinking about what to mock.

## How we develop?

1. Write a cloud function
2. Write unit tests
3. Write integration tests
4. Go manually over the flow to see if it works
5. Deploy the function to staging & make sure it works
6. Deploy the function to production

## Deployment

We don't have CI yet. You'll need to be logged into gcloud cli and have the appropriate premissions.

### Staging

`npm run deploy:staging`

### Production

`npm run deploy:production`

# Contributors

Following are the people who contributed in the development of this website:

<table>
<tr>
<td>
        <img src="https://avatars0.githubusercontent.com/u/25259674?s=460&v=4" width="150px;"/><br />
        <a
                href="https://github.com/bhawna333"
                rel="noopener morefferer"
                target="_blank">
            Bhawna Saini
</a>
</td>
        <td>
        <img src="https://avatars0.githubusercontent.com/u/20355307?s=400&v=4" width="150px;"/><br />
         <a
                href="https://github.com/lustoykov"
                rel="noopener morefferer"
                target="_blank">
            Lyubomir Stoykov
</a>
        </td>
        <td>
        <img src="https://avatars3.githubusercontent.com/u/43818253?s=400&v=4" width="150px;"/><br />
     <a
                href="https://github.com/danielbedo"
                rel="noopener morefferer"
                target="_blank">
            Daniel Bedo
</a>
        </td>
        <td> <img src="https://avatars1.githubusercontent.com/u/10283674?s=460&v=4" width="150px;"/><br />
        <a
          href="https://github.com/mstockerl"
          rel="noopener morefferer"
          target="_blank">
          Michael Stockerl
        </a>
      </td>
      <td> <img src="https://avatars3.githubusercontent.com/u/41467952?s=400&v=4" width="150px;"/><br />
         <a
                href="https://github.com/BastianRieder"
                rel="noopener morefferer"
                target="_blank">
            Bastian Rieder
        </a>
     </td>

<td> <img src="https://avatars2.githubusercontent.com/u/5422354?s=400&v=4" width="150px;"/><br />
         <a
                href="https://github.com/Brothman"
                rel="noopener morefferer"
                target="_blank">
            Benji Rothman
</a>
         </td>

<td> <img src="https://avatars2.githubusercontent.com/u/39758486?s=400&v=4" width="150px;"/><br />
         <a
                href="https://github.com/ayamlearning"
                rel="noopener morefferer"
                target="_blank">
            Yasin Musa Ayami
</a>
         </td>

<td> <img src="https://avatars2.githubusercontent.com/u/45259171?s=400&v=4" width="150px;"/><br />
         <a
                href="https://github.com/Annina2806"
                rel="noopener morefferer"
                target="_blank">
            Annina Schaupp
</a>
         </td>

<td> <img src="https://avatars3.githubusercontent.com/u/43818253?s=400&v=4" width="150px;"/><br />
         <a
                href="https://github.com/pranjal2394"
                rel="noopener morefferer"
                target="_blank">
            pranjal2394
</a>
         </td>

</table>
