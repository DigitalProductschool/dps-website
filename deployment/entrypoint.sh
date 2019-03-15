# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#!/bin/bash
set -e

# This could be configured from the outside.
IMAGE=gcr.io/core-228912/dps-website

# Count total amount of images to delete
IMAGE_COUNT=$(gcloud container images list-tags ${IMAGE} --limit=999999 --sort-by=TIMESTAMP | grep -v DIGEST | wc -l)
# We want to always keep the five latest images
IMAGES_TO_DELETE=$(( $IMAGE_COUNT - 5 ))
echo $IMAGES_TO_DELETE

echo "Will delete ${IMAGES_TO_DELETE} images"
for digest in $(gcloud container images list-tags ${IMAGE} --limit=${IMAGES_TO_DELETE} --sort-by=TIMESTAMP --format='get(digest)'); do
    set -x
    gcloud container images delete -q --force-delete-tags "${IMAGE}@${digest}"
done
