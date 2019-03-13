# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
set -eou pipefail
gcloud container images list-tags ${IMAGE} --limit=5 --sort-by=~TIMESTAMP --format='get(digest)' > top5.txt
gcloud container images list-tags ${IMAGE} --limit=999999 --sort-by=~TIMESTAMP --format='get(digest)' > all.txt
awk 'NR==FNR{a[$0];next} !($0 in a)' top5.txt all.txt > temp.txt
declare -i C=0
IFS=''
while read digest
  do (
       echo $digest "deleted"
      # gcloud container images delete -q --force-delete-tags "gcr.io/core-228912/dps-website@${digest}"
     )
  C=C+1
  done < temp.txt
 echo "Number of Images deleted: ${C}"
