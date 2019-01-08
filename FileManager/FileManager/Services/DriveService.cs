using FileManager.IServices;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace FileManager.Services
{
	public class DriveService: IDriveService
	{
		/// <summary>
		/// Get drivers
		/// </summary>
		/// <returns></returns>
		public string[] GetDrives()
		{
			return Directory.GetLogicalDrives();
		}
	}
}