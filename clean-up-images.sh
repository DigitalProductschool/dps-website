#!/bin/bash
set -e

IMAGE=gcr.io/staging-218117/dpschool-website

# Count total amount of images to delete
IMAGE_COUNT=$(gcloud container images list-tags ${IMAGE} --limit=999999 --sort-by=TIMESTAMP | grep -v DIGEST | wc -l)
# We want to always keep the three latest images
IMAGES_TO_DELETE=$(( $IMAGE_COUNT - 3 ))
echo $IMAGES_TO_DELETE

echo "Will delete ${IMAGES_TO_DELETE} images"
for digest in $(gcloud container images list-tags ${IMAGE} --limit=${IMAGES_TO_DELETE} --sort-by=TIMESTAMP --format='get(digest)'); do
    set -x
    gcloud container images delete -q --force-delete-tags "${IMAGE}@${digest}"
done


