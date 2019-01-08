using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileManager.IServices
{
	/// <summary>
	/// IDrive Service
	/// </summary>
	public interface IDriveService
	{
		/// <summary>
		/// Get Drives
		/// </summary>
		/// <returns></returns>
		string[] GetDrives();
	}
}
