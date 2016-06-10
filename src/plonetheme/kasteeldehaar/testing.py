# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import plonetheme.kasteeldehaar


class PlonethemeKasteeldehaarLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=plonetheme.kasteeldehaar)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'plonetheme.kasteeldehaar:default')


plonetheme_kasteeldehaar_FIXTURE = PlonethemeKasteeldehaarLayer()


plonetheme_kasteeldehaar_INTEGRATION_TESTING = IntegrationTesting(
    bases=(plonetheme_kasteeldehaar_FIXTURE,),
    name='PlonethemeKasteeldehaarLayer:IntegrationTesting'
)


plonetheme_kasteeldehaar_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(plonetheme_kasteeldehaar_FIXTURE,),
    name='PlonethemeKasteeldehaarLayer:FunctionalTesting'
)


plonetheme_kasteeldehaar_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        plonetheme_kasteeldehaar_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='PlonethemeKasteeldehaarLayer:AcceptanceTesting'
)
