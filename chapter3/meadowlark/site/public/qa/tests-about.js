/**
 * Created by dseet on 7/4/2014.
 */
suite("About Page Tests", function () {
    test('page should contain link to contact page', function () {
        assert($('a[href="/contact"]').length);
    });
});