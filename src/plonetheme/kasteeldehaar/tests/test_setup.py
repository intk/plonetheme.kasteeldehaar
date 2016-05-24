# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plonetheme.kasteeldehaar.testing import plonetheme_kasteeldehaar_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that plonetheme.kasteeldehaar is properly installed."""

    layer = plonetheme_kasteeldehaar_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if plonetheme.kasteeldehaar is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'plonetheme.kasteeldehaar'))

    def test_browserlayer(self):
        """Test that IPlonethemeKasteeldehaarLayer is registered."""
        from plonetheme.kasteeldehaar.interfaces import (
            IPlonethemeKasteeldehaarLayer)
        from plone.browserlayer import utils
        self.assertIn(IPlonethemeKasteeldehaarLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = plonetheme_kasteeldehaar_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['plonetheme.kasteeldehaar'])

    def test_product_uninstalled(self):
        """Test if plonetheme.kasteeldehaar is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'plonetheme.kasteeldehaar'))

    def test_browserlayer_removed(self):
        """Test that IPlonethemeKasteeldehaarLayer is removed."""
        from plonetheme.kasteeldehaar.interfaces import IPlonethemeKasteeldehaarLayer
        from plone.browserlayer import utils
        self.assertNotIn(IPlonethemeKasteeldehaarLayer, utils.registered_layers())
