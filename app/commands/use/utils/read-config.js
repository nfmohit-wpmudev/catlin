/**
 * Utility function to reads the configuration of a downloaded boilerplate
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import JSZip from 'jszip';

const readConfig = async ( boilerplate, download ) => {
	try {
		const zip = await JSZip.loadAsync( download );
		const config = await zip
			.file( `${ boilerplate }/.catlin.json` )
			.async( 'string' );

		return config;
	} catch ( error ) {
		return error;
	}
};

export { readConfig };
