/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

casper.test.begin('Page - Content', function(test) {

    /**
     * Verify that a manager of the content sees the correct buttons in the clips
     *     - Download
     *     - Manage access
     *     - Edit details
     *     - Upload new version
     *     - Revisions
     *     - Delete
     */
    var verifyContentClipButtonsAsManager = function() {
        test.assertSelectorHasText('#content-clip-container .oae-clip a', 'Download' , 'The `Download` button is available for managers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is available for managers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is available for managers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-uploadnewversion', 'The `Upload new version` button is available for managers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-revisions', 'The `Revisions` button is available for managers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is available for managers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is not available for managers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is not available for managers of content');
    };

    /**
     * Verify that a member of the content sees the correct buttons in the clips
     *     - Download
     *     - Shared with
     *     - Details
     */
    var verifyContentClipButtonsAsViewer = function() {
        test.assertSelectorHasText('#content-clip-container .oae-clip a', 'Download' , 'The `Download` button is available for viewers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is available for viewers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is available for viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is not available for viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is not available for viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-uploadnewversion', 'The `Upload new version` button is not available for viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-revisions', 'The `Revisions` button is not available for viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is not available for viewers of content');
    };

    /**
     * Verify that an anonymous user sees the correct buttons in the clips
     *     - Download
     *     - Shared with
     *     - Details
     */
    var verifyContentClipButtonsAsAnonymous = function() {
        test.assertSelectorHasText('#content-clip-container .oae-clip a', 'Download' , 'The `Download` button is available for anonymous viewers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is available for anonymous viewers of content');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is available for anonymous viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is not available for anonymous viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is not available for anonymous viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-uploadnewversion', 'The `Upload new version` button is not available for anonymous viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-revisions', 'The `Revisions` button is not available for anonymous viewers of content');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is not available for anonymous viewers of content');
    };

    /**
     * Verify that a manager of a link sees the correct buttons in the clips
     *     - Manage access
     *     - Edit details
     *     - Delete
     */
    var verifyLinkClipButtonsAsManager = function() {
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is available for managers of a link');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is available for managers of a link');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is available for managers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is not available for managers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is not available for managers of a link');
    };

    /**
     * Verify that a member of a link sees the correct buttons in the clips
     *     - Shared with
     *     - Details
     */
    var verifyLinkClipButtonsAsViewer = function() {
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is available for viewers of a link');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is available for viewers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is not available for viewers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is not available for viewers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is not available for viewers of a link');
    };

    /**
     * Verify that an anonymous user sees the correct buttons in the clips
     *     - Shared with
     *     - Details
     */
    var verifyLinkClipButtonsAsAnonymous = function() {
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is available for anonymous viewers of a link');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is available for anonymous viewers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is not available for anonymous viewers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is not available for anonymous viewers of a link');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is not available for anonymous viewers of a link');
    };

    /**
     * Verify that a manager of the collaborative document sees the correct buttons in the clips
     *     - Manage access
     *     - Edit details
     *     - Revisions
     *     - Delete
     */
    var verifyCollabdocClipButtonsAsManager = function() {
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is available for managers of collaborative documents');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is available for managers of collaborative documents');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-revisions', 'The `Revisions` button is available for managers of collaborative documents');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is available for managers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is not available for managers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is not available for managers of collaborative documents');
    };

    /**
     * Verify that a member of the collaborative document sees the correct buttons in the clips
     *     - Shared with
     *     - Details
     */
    var verifyCollabdocClipButtonsAsViewer = function() {
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is available for viewers of collaborative documents');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is available for viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is not available for viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is not available for viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-revisions', 'The `Revisions` button is not available for viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is not available for viewers of collaborative documents');
    };

    /**
     * Verify that an anonymous user sees the correct buttons in the clips
     *     - Shared with
     *     - Details
     */
    var verifyCollabdocClipButtonsAsAnonymous = function() {
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentshared', 'The `Shared with` button is available for anonymous viewers of collaborative documents');
        test.assertExists('#content-clip-container .oae-clip button.oae-trigger-contentdetails', 'The `Details` button is available for anonymous viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-manageaccess', 'The `Manage access` button is not available for anonymous viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-editcontent', 'The `Edit details` button is not available for anonymous viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-revisions', 'The `Revisions` button is not available for anonymous viewers of collaborative documents');
        test.assertDoesntExist('#content-clip-container .oae-clip button.oae-trigger-deleteresource', 'The `Delete` button is not available for anonymous viewers of collaborative documents');
    };

    casper.start(configUtil().tenantUI, function() {
        // Create a couple of users to test with
        var user1 = null;
        var user2 = null;
        userUtil().createUsers(2, function(users) {
            user1 = users[0];
            user2 = users[1];
        });

        // Login with the first user
        casper.then(function() {
            userUtil().doLogIn(user1.username, configUtil().defaultUserPassword);
        });

        // Create a content item, go to the content profile page and verify the clip buttons as a manager
        var contentURL = null;
        casper.then(function() {
            casper.echo('Verify content clip buttons as a manager', 'INFO');
            contentUtil().createFile(null, null, [user2.id], function(_contentURL) {
                contentURL = configUtil().tenantUI + _contentURL;
                casper.thenOpen(contentURL, function() {
                    casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                        verifyContentClipButtonsAsManager();
                    });
                });
                casper.then(function() {
                    userUtil().doLogOut();
                });
            });
        });

        casper.then(function() {
            casper.echo('Verify content clip buttons as a viewer', 'INFO');
            userUtil().doLogIn(user2.username, configUtil().defaultUserPassword);
            casper.thenOpen(contentURL, function() {
                casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                    verifyContentClipButtonsAsViewer();
                });
            });
            casper.then(function() {
                userUtil().doLogOut();
            });
        });

        casper.then(function() {
            casper.echo('Verify content clip buttons as an anonymous user', 'INFO');
            casper.thenOpen(contentURL, function() {
                casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                    verifyContentClipButtonsAsAnonymous();
                });
            });
        });

        // Login with the first user again to start link tests
        casper.thenOpen(configUtil().tenantUI, function() {
            userUtil().doLogIn(user1.username, configUtil().defaultUserPassword);
        });

        // Create a link, go to the content profile page and verify the clip buttons as a manager
        var linkURL = null;
        casper.then(function() {
            casper.echo('Verify link clip buttons as a manager', 'INFO');
            contentUtil().createLink(null, null, [user2.id], function(link) {
                linkURL = configUtil().tenantUI + link.profilePath;
                casper.thenOpen(linkURL, function() {
                    casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                        verifyLinkClipButtonsAsManager();
                    });
                });
                casper.then(function() {
                    userUtil().doLogOut();
                });
            });
        });

        casper.then(function() {
            casper.echo('Verify link clip buttons as a viewer', 'INFO');
            userUtil().doLogIn(user2.username, configUtil().defaultUserPassword);
            casper.thenOpen(linkURL, function() {
                casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                    verifyLinkClipButtonsAsViewer();
                });
            });
            casper.then(function() {
                userUtil().doLogOut();
            });
        });

        casper.then(function() {
            casper.echo('Verify link clip buttons as an anonymous user', 'INFO');
            casper.thenOpen(linkURL, function() {
                casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                    verifyLinkClipButtonsAsAnonymous();
                });
            });
        });

        // Login with the first user again to start collabdoc tests
        casper.thenOpen(configUtil().tenantUI, function() {
            userUtil().doLogIn(user1.username, configUtil().defaultUserPassword);
        });

        // Create a collaborative document, go to the content profile page and verify the clip buttons as a manager
        var collabdocURL = null;
        casper.then(function() {
            casper.echo('Verify collabdoc clip buttons as a manager', 'INFO');
            collabDocUtil().createCollabDoc(null, [user2.id], function(collabdoc) {
                collabdocURL = configUtil().tenantUI + collabdoc.profilePath;
                casper.thenOpen(collabdocURL, function() {
                    casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                        verifyCollabdocClipButtonsAsManager();
                    });
                });
                casper.then(function() {
                    userUtil().doLogOut();
                });
            });
        });

        casper.then(function() {
            casper.echo('Verify collabdoc clip buttons as a viewer', 'INFO');
            userUtil().doLogIn(user2.username, configUtil().defaultUserPassword);
            casper.thenOpen(collabdocURL, function() {
                casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                    verifyCollabdocClipButtonsAsViewer();
                });
            });
            casper.then(function() {
                userUtil().doLogOut();
            });
        });

        casper.then(function() {
            casper.echo('Verify collabdoc clip buttons as an anonymous user', 'INFO');
            casper.thenOpen(collabdocURL, function() {
                casper.waitForSelector('#content-clip-container .oae-clip-content > button', function() {
                    verifyCollabdocClipButtonsAsAnonymous();
                });
            });
        });
    });

    casper.run(function() {
        test.done();
    });
});