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
2. Any environemnt variables go into `.env.development` for local development and into `cloudbuild-prod|staging.yaml` for prod / staging. This is a bit inconsistent, it might be best to move those from `cloudbuild-prod|staging.yaml` in `.env.staging` and `.env.production`, but yolo unless you wanna fix it.

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

1. Running `npm run serve` will start the functions locally. However, those functions connect to `firestore` on the cloud. The other option would be to start `firestore` emulator as well, but for now we like the cloud one, because it provides nice UI and is less hassle to setup. Those functions would connect against our staging `cloud storage` as well.

2. In order to authenticate against `firestore` and `cloud storage`, you need to go to the dps-website-staging project and download the key for `dps-website-staging-0@appspot.gserviceaccount.com` and put it under `functions/` with name `dps-website-staging.firebase.key.json`.

3. Now you can experiment against the functions that run locally and are accessible via localhost, but they access our staging database & storage.

4. For faster iterations, we recommend developing via tests if possible

## Tests

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
