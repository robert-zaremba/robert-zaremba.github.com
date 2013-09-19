# if [ $(git diff | wc -l) -ne  0 ] ; then
#     echo "ERROR: commit changes first"
#     exit 1;
# fi

git add -A
git ci -a || exit 1

FOLDER=../robert-zaremba.github.com.deploy
echo "deploy temp folder: $FOLDER"

if [ -d "$FOLDER" ]; then
	{ echo "ERROR: directory  $FOLDER  exists"; exit 1; }
fi
mv blog/html $FOLDER
rm -rf blog
git co master
mv .git*  $FOLDER/
mv CNAME  $FOLDER/
mv params.json  $FOLDER/
mv .nojekyll  $FOLDER/

rm -rf *
rm -rf .*
mv $FOLDER/* ./
mv $FOLDER/.* ./
rmdir $FOLDER
git add -A
git ci -a