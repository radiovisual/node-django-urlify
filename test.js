import test from 'ava';
import fn from './';

test('urlifies', t => {
	t.is(fn('tiešām labas lietas šeit'), 'tiesam-labas-lietas-seit');
	t.is(fn('étonnamment beau générateur de limace'), 'etonnamment-beau-generateur-de-limace');
	t.is(fn('действительно хороший материал здесь!'), 'dejstvitelno-horoshij-material-zdes');
	t.is(fn('Yllättävän kaunis etana generaattori.'), 'yllattavan-kaunis-etana-generaattori');
	t.is(fn('εκπληκτικά όμορφη γεννήτρια γυμνοσάλιαγκας'), 'ekplhktika-omorfh-gennhtria-gymnosaliagkas');
	t.is(fn('Sveiki pasaulē!'), 'sveiki-pasaule');
	t.is(fn('Naprawdę wielkie ślimaki tu dzieje!!'), 'naprawde-wielkie-slimaki-tu-dzieje');
	t.is(fn('Opravdu úžasné slimák'), 'opravdu-uzasne-slimak');
});

test('lowercase', t => {
	t.is(fn('SCUß!! ĄBĆ'), 'scuss-abc');
});

test('numChars', t => {
	t.is(fn('SCUß!! ĄBĆ', 2).length, 2);
});

test('allowUnicode', t => {
	t.is(fn('SCUß!! ĄBĆ', -1, true), '');
});
