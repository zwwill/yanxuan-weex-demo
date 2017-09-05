@echo off
echo "*****************************************************************************"
echo "*                             Welcome to Weex                               *"
echo "*                                                                           *"
echo "*             A framework for building Mobile cross-platform UI.            *"
echo "*                                                                           *"
echo "*                      https://github.com/alibaba/weex                      *"
echo "*****************************************************************************"

pushd %~dp0
npm run serve
popd
